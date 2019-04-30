import * as React from 'react';
import { ArenaPerson, CVFeilMelding } from '../../datatyper/arenaperson';
import Grid from '../../utils/grid';
import InformasjonsbolkListe from '../felles-komponenter/informasjonsbolk-liste';
import SistEndret from '../felles-komponenter/sist-endret';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import { OppfolgingData } from '../../datatyper/oppfolgingData';
import { Aktorid } from '../../datatyper/aktorid';
import Lenke from 'nav-frontend-lenker';
import { byggPamUrl } from '../cv/cv';
import { RedigerJobbprofil } from './rediger-jobbprofil';

interface JobbprofilProps {
    jobbprofil: Pick<ArenaPerson, 'jobbprofil'> | CVFeilMelding;
    oppfolging: OppfolgingData;
    aktorId: Aktorid;
    feature: {'veilarbmaofs.manuell_cv_registrering': boolean };
}

function Jobbprofil(props: { data: JobbprofilProps }) {

    if (props.data.jobbprofil === CVFeilMelding.IKKE_UNDER_OPPFOLGING) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    }

    const erManuell = props.data.oppfolging.manuell;
    const aktorId = props.data.aktorId.aktorId;
    const pamUrl = byggPamUrl(aktorId || '', 'jobbprofil');
    const feature = Object.keys(props.data.feature).find((key) => key ==='veilarbmaofs.manuell_cv_registrering');
    if (!props.data.jobbprofil || props.data.jobbprofil === CVFeilMelding.IKKE_REGISTRERT) {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert jobbprofil {erManuell && aktorId && feature && <Lenke href={pamUrl}>Registrer her</Lenke>}
            </AlertStripeInfoSolid>
        );
    }

    if(props.data.jobbprofil === CVFeilMelding.IKKE_TILLGANG) {
        return (
            <AlertStripeInfoSolid type="info">
                Du har ikke tilgang til å se jobbprofil for denne brukeren. Årsaker kan være
                <ul>
                    <li>Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang. Be bruker gå inn på nav.no og oppdatere CV'en sin.</li>
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
            {feature && <RedigerJobbprofil erManuell={erManuell} jobbprofilRegistreringsLenke={pamUrl}/>}
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
