import React from 'react';
import { ArenaPerson, CVFeilMelding } from '../../../rest/datatyper/arenaperson';
import Grid from '../../grid';
import InformasjonsbolkListe from '../../felles/informasjonsbolk-liste';
import SistEndret from '../../felles/sist-endret';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import { UnderOppfolgingData } from '../../../rest/datatyper/underOppfolgingData';
import { Aktorid } from '../../../rest/datatyper/aktorid';
import Lenke from 'nav-frontend-lenker';
import { byggPamUrl } from '../cv/cv';
import { RedigerJobbprofil } from './rediger-jobbprofil';

interface JobbprofilProps {
    jobbprofil: Pick<ArenaPerson, 'jobbprofil'> | CVFeilMelding;
    oppfolging: UnderOppfolgingData;
    aktorId: Aktorid;
}

function Jobbprofil(props: { data: JobbprofilProps }) {

    if (!props.data.oppfolging.underOppfolging) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    }

    const erManuell = props.data.oppfolging.erManuell;
    const aktorId = props.data.aktorId.aktorId;
    const pamUrl = byggPamUrl(aktorId || '', 'jobbprofil');

    if (!(props.data.jobbprofil as Pick<ArenaPerson, 'jobbprofil'>).jobbprofil || props.data.jobbprofil === CVFeilMelding.IKKE_REGISTRERT) {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert jobbprofil.
                {erManuell && aktorId && <Lenke target="_blank" href={pamUrl}>Registrer her</Lenke>}
            </AlertStripeInfoSolid>
        );
    }

    if(props.data.jobbprofil === CVFeilMelding.IKKE_TILLGANG) {
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
    } = (props.data.jobbprofil as Pick<ArenaPerson, 'jobbprofil'>).jobbprofil;

    const arbeidssted = onsketArbeidssted.map((sted) => sted.stedsnavn);
    const yrker = onsketYrke.map((yrke) => yrke.tittel);
    const ansettelsesform = onsketAnsettelsesform.map((form) => form.tittel);
    const arbeidstid = onsketArbeidstidsordning.map((tid) => tid.tittel);
    const heltidDeltidList = [
        heltidDeltid.heltid && 'Heltid',
        heltidDeltid.deltid && 'Deltid',
    ];
    const kompetanser = kompetanse.map((kompetansen) => kompetansen.tittel);

    return (
        <>
            <RedigerJobbprofil erManuell={erManuell} jobbprofilRegistreringsLenke={pamUrl}/>
            <SistEndret sistEndret={sistEndret} onlyYearAndMonth={false} />
            <Grid columns={3} gap="0.5rem">
                <InformasjonsbolkListe header="Arbeidssted" list={arbeidssted} />
                <InformasjonsbolkListe header="Yrke" list={yrker} />
                <InformasjonsbolkListe header="Heltid/Deltid" list={heltidDeltidList} />
                <InformasjonsbolkListe header="Arbeidstidordning" list={arbeidstid} />
                <InformasjonsbolkListe header="Ansettelsesform" list={ansettelsesform} />
                <InformasjonsbolkListe header="Kompetanse" list={kompetanser} />
            </Grid>
        </>
    );
}

export default Jobbprofil;
