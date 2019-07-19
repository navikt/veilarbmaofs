import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import { RedigerJobbprofil } from './rediger-jobbprofil';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { byggPamUrl } from '../../../../utils';
import { useFetchAktorId, useFetchCvOgJobbprofil, useFetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { getData } from '../../../../rest/utils';

const JobbprofilPanelInnhold = () => {
    const {fnr} = useAppStore();
    const cvOgJobbprofil = useFetchCvOgJobbprofil(fnr);
    const underOppfolging = useFetchUnderOppfolging(fnr);
    const aktorId = useFetchAktorId(fnr);

    if (cvOgJobbprofil.isLoading || underOppfolging.isLoading || aktorId.isLoading) {
        return <Laster/>;
    } else if (cvOgJobbprofil.isError || underOppfolging.isError || aktorId.isError) {
        return <Feilmelding/>;
    } else if (!underOppfolging.isLoading && underOppfolging.data.isNothing()) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    } else if (cvOgJobbprofil.data.isNothing() || underOppfolging.data.isNothing() || aktorId.data.isNothing()) {
        return <NoData/>;
    }

    const cvOgJobbprofilData = getData(cvOgJobbprofil);
    const underOppfolgingData = getData(underOppfolging);
    const aktorIdData = getData(aktorId);

    const erManuell = underOppfolgingData.erManuell;
    const brukerAktorId = aktorIdData.aktorId;
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
    } = cvOgJobbprofilData.jobbprofil;

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
};

export default JobbprofilPanelInnhold;
