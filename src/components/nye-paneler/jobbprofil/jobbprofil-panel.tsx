import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { useAppStoreContext } from '../../../stores/app-store';
import { hasData } from '../../../rest/utils';
import { Laster } from '../../datalasting/laster';
import { Feilmelding } from '../../datalasting/feilmelding';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import { RedigerJobbprofil } from '../../paneler/jobbprofil/rediger-jobbprofil';
import SistEndret from '../../felles/sist-endret';
import Grid from '../../grid';
import InformasjonsbolkListe from '../../felles/informasjonsbolk-liste';
import { byggPamUrl } from '../../../utils/util';

const JobbprofilPanelInnhold = () => {
    const {cvOgJobbprofil, underOppfolging, aktorId} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (!hasData(cvOgJobbprofil)) {
            cvOgJobbprofil.fetch({fnr});
        }
        if (!hasData(underOppfolging)) {
            underOppfolging.fetch({fnr});
        }
        if (!hasData(aktorId)) {
            aktorId.fetch({fnr});
        }
    }, []);

    return (
        <Laster avhengigheter={[cvOgJobbprofil, underOppfolging, aktorId]}>
            <Feilmelding avhengigheter={aktorId}>
                {() => {
                    if (!hasData(underOppfolging)) {
                        return (
                            <AlertStripeInfoSolid type="info">
                                Bruker er ikke under arbeidsrettet oppfølging
                            </AlertStripeInfoSolid>
                        );
                    }

                    const erManuell = underOppfolging.data.erManuell;
                    const brukerAktorId = aktorId.data.aktorId;
                    const pamUrl = byggPamUrl(brukerAktorId || '', 'jobbprofil');

                    if (cvOgJobbprofil.httpCode === 404 || cvOgJobbprofil.httpCode === 204) {
                        return (
                            <AlertStripeInfoSolid type="info">
                                Denne personen har ikke registrert jobbprofil.
                                {erManuell && brukerAktorId &&
                                <Lenke target="_blank" href={pamUrl}>Registrer her</Lenke>}
                            </AlertStripeInfoSolid>
                        );
                    } else if (cvOgJobbprofil.httpCode === 403 || cvOgJobbprofil.httpCode === 401) {
                        return (
                            <AlertStripeInfoSolid type="info">
                                Du har ikke tilgang til å se jobbprofil for denne brukeren. Årsaker kan være
                                <ul>
                                    <li>
                                        Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang.
                                        Be bruker gå inn på nav.no og oppdatere CV'en sin.
                                    </li>
                                </ul>
                            </AlertStripeInfoSolid>
                        );
                    }

                    const {
                        sistEndret,
                        onsketYrke,
                        onsketArbeidssted,
                        onsketAnsettelsesform,
                        onsketArbeidstidsordning,
                        heltidDeltid,
                        kompetanse
                    } = cvOgJobbprofil.data.jobbprofil;

                    const arbeidssted = onsketArbeidssted.map((sted) => sted.stedsnavn);
                    const yrker = onsketYrke.map((yrke) => yrke.tittel);
                    const ansettelsesform = onsketAnsettelsesform.map((form) => form.tittel);
                    const arbeidstid = onsketArbeidstidsordning.map((tid) => tid.tittel);
                    const kompetanser = kompetanse.map((kompetansen) => kompetansen.tittel);
                    const heltidDeltidList = [
                        heltidDeltid.heltid && 'Heltid',
                        heltidDeltid.deltid && 'Deltid',
                    ];

                    return (
                        <>
                            <RedigerJobbprofil erManuell={erManuell} jobbprofilRegistreringsLenke={pamUrl}/>
                            <SistEndret sistEndret={sistEndret} onlyYearAndMonth={false}/>
                            <Grid columns={3} gap="0.5rem">
                                <InformasjonsbolkListe header="Arbeidssted" list={arbeidssted}/>
                                <InformasjonsbolkListe header="Yrke" list={yrker}/>
                                <InformasjonsbolkListe header="Heltid/Deltid" list={heltidDeltidList}/>
                                <InformasjonsbolkListe header="Arbeidstidordning" list={arbeidstid}/>
                                <InformasjonsbolkListe header="Ansettelsesform" list={ansettelsesform}/>
                                <InformasjonsbolkListe header="Kompetanse" list={kompetanser}/>
                            </Grid>
                        </>
                    );
                }}
            </Feilmelding>
        </Laster>
    );
};

const JobbprofilPanel = () => {
    return (
        <Panel name="jobbprofil" tittel="Jobbprofil">
            <JobbprofilPanelInnhold/>
        </Panel>
    );
};

export default JobbprofilPanel;
