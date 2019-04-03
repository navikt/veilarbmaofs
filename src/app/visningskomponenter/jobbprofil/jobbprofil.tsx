import * as React from 'react';
import { ArenaPerson, CVFeilMelding } from '../../datatyper/arenaperson';
import Grid from '../../utils/grid';
import InformasjonsbolkListe from '../felles-komponenter/informasjonsbolk-liste';
import SistEndret from '../felles-komponenter/sist-endret';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';

interface JobbprofilProps {
    jobbprofil: Pick<ArenaPerson, 'jobbprofil'> | CVFeilMelding;
}

function Jobbprofil(props: { data: JobbprofilProps }) {
    if (props.data.jobbprofil === 'Ikke registrert') {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert jobbprofil
            </AlertStripeInfoSolid>
        );
    }

    if(props.data.jobbprofil === 'Ikke tilgang') {
        return (
            <AlertStripeInfoSolid type="info">
                Du har ikke tilgang til å se jobbprofil for denne brukeren. Årsaker kan være
                <ul>
                    <li>Bruker er ikke under arbeidsrettet oppfølging</li>
                    <li>Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang</li>
                    <li>Du har ikke riktige rettigheter til å se på denne brukeren</li>
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
