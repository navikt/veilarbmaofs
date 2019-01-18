import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Grid from "../../utils/grid";
import InformasjonsbolkListe from '../felles-komponenter/informasjonsbolk-liste';
import SistEndret from "../felles-komponenter/sist-endret";

function Jobbprofil(props: { data: { jobbprofil: Pick<ArenaPerson, 'jobbprofil'>} }) {
    const {
        sistEndret,
        onsketYrke,
        onsketArbeidssted,
        onsketAnsettelsesform,
        onsketArbeidstidsordning,
        heltidDeltid,
        kompetanse
    } = props.data.jobbprofil.jobbprofil;

    const arbeidssted = onsketArbeidssted.map(sted => sted.stedsnavn);
    const yrker = onsketYrke.map(yrke => yrke.tittel);
    const ansettelsesform = onsketAnsettelsesform.map(form => form.tittel);
    const arbeidstid = onsketArbeidstidsordning.map(tid => tid.tittel);
    const heltidDeltidList = [
        heltidDeltid.heltid && 'Heltid',
        heltidDeltid.deltid && 'Deltid',
    ];
    const kompetanser = kompetanse.map(kompetansen => kompetansen.tittel);

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