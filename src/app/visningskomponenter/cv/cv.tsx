import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Grid from "../../utils/grid";
import Beskrivelse from "./beskrivelse";
import Kompetanse from "./kompetanse";
import Kurs from "./kurs";
import Sertifikater from "./sertifikater";
import SistEndret from "./sist-endret";
import Utdanning from "./utdanning";
import Verv from "./verv";
import Yrkeserfaring from "./yrkeserfaring";


function CV(props: { data: { cv: ArenaPerson } }) {
    const { beskrivelse, yrkeserfaring, utdanning, sertifikater, disponererBil, kompetanse, kurs, verv, sistEndret } = props.data.cv;

    return (
        <>
            <SistEndret sistEndret={sistEndret} />
            <Grid columns={2} gap="0.5rem">
                <Beskrivelse beskrivelse={beskrivelse}/>
                <Yrkeserfaring yrkeserfaring={yrkeserfaring}/>
                <Utdanning utdanning={utdanning} />
                <Sertifikater sertifikater={sertifikater} disponererBil={disponererBil} />
                <Kompetanse kompetanse={kompetanse} />
                <Kurs kurs={kurs} />
                <Verv verv={verv}/>
            </Grid>
        </>
    );
}

export default CV;