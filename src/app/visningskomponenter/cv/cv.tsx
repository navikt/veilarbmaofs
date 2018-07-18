import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import FloatGrid from "../../utils/float-grid";
import SistEndret from "../felles-komponenter/sist-endret";
import Beskrivelse from "./beskrivelse";
import Forerkort from "./forerkort";
import Kompetanse from "./kompetanse";
import Kurs from "./kurs";
import Sertifikater from "./sertifikater";
import Sprak from "./sprak";
import Utdanning from "./utdanning";
import Verv from "./verv";
import Yrkeserfaring from "./yrkeserfaring";

interface Props {
    data: {
        cv: ArenaPerson
    }
}

function CV(props: Props) {
    const { beskrivelse, yrkeserfaring, utdanning, sertifikater, forerkort, disponererBil, sprak, kompetanse, kurs, verv, sistEndret } = props.data.cv;

    return (
        <>
            <SistEndret sistEndret={sistEndret} />
            <Beskrivelse beskrivelse={beskrivelse} />
            <FloatGrid columns={2} gap={8}>
                <Yrkeserfaring yrkeserfaring={yrkeserfaring} />
                <Utdanning utdanning={utdanning} />
                <Sertifikater sertifikater={sertifikater} />
                <Forerkort forerkort={forerkort} disponererBil={disponererBil} />
                <Sprak sprak={sprak} />
                <Kompetanse kompetanse={kompetanse} />
                <Kurs kurs={kurs} />
                <Verv verv={verv}/>
            </FloatGrid>
        </>
    );
}

export default CV;
