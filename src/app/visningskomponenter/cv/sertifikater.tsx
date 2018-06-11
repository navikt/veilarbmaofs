import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

type Props = Pick<ICVInfo, 'sertifikater'> & Pick<ICVInfo, 'disponererBil'>;

function Sertifikater(props: Props) {
    if (isNullOrUndefined(props.sertifikater)) {
        return null;
    }

    const sertifikatListe = props.sertifikater.map((sertifikat, index) => (
        <div key={`sertifikater-${index}`} className="underinformasjon">
            {sertifikat.sertifikatKodeNavn}
        </div>
    ));

    return (
        <Informasjonsbolk header="Sertifikater" {...props}>
            {sertifikatListe}
            <div>
                Disponerer bil: {props.disponererBil? "Ja" : "Nei"}
            </div>
        </Informasjonsbolk>
    );
}

export default Sertifikater;