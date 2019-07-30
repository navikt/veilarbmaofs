import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import { RedigerJobbprofil } from './rediger-jobbprofil';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { byggPamUrl } from '../../../../utils';
import { useFetchAktorId, useFetchCvOgJobbprofil, useFetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { isPending, hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';

const JobbprofilPanelInnhold = () => {
    const {fnr} = useAppStore();
    const cvOgJobbprofil = useFetchCvOgJobbprofil(fnr);
    const underOppfolging = useFetchUnderOppfolging(fnr);
    const aktorId = useFetchAktorId(fnr);

    if (isPending(cvOgJobbprofil) || isPending(underOppfolging) || isPending(aktorId)) {
        return <Laster/>;
    } else if (hasError(underOppfolging) || hasError(aktorId) || !hasData(underOppfolging) || !hasData(aktorId)) {
        return <Feilmelding/>;
    } else if (!isPending(underOppfolging) && !hasData(underOppfolging)) {
        return (
            <AlertStripeInfo>
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfo>
        );
    }

    const underOppfolgingData = underOppfolging.data;
    const aktorIdData = aktorId.data;

    const erManuell = underOppfolgingData.erManuell;
    const brukerAktorId = aktorIdData.aktorId;
    const pamUrl = byggPamUrl(brukerAktorId || '', 'jobbprofil');

    if (cvOgJobbprofil.statusCode === 404 || cvOgJobbprofil.statusCode === 204) {
        return (
            <AlertStripeInfo>
                Denne personen har ikke registrert jobbprofil.&nbsp;&nbsp;
                {erManuell && brukerAktorId && <Lenke target="_blank" href={pamUrl}>Registrer her</Lenke>}
            </AlertStripeInfo>
        );
    } else if (cvOgJobbprofil.statusCode === 403 || cvOgJobbprofil.statusCode === 401) {
        return (
            <AlertStripeInfo>
                Du har ikke tilgang til å se jobbprofil for denne brukeren. Årsaker kan være
                <ul>
                    <li>
                        Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang.
                        Be bruker gå inn på nav.no og oppdatere CV'en sin.
                    </li>
                </ul>
            </AlertStripeInfo>
        );
    } else if (!hasData(cvOgJobbprofil)) {
        return <Feilmelding/>;
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
};

export default JobbprofilPanelInnhold;
