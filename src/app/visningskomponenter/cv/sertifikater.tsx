import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

import { Normaltekst } from 'nav-frontend-typografi';

type Props = Pick<ICVInfo, 'sertifikater'> & Pick<ICVInfo, 'disponererBil'>;

function Sertifikater(props: Props) {
    if (isNullOrUndefined(props.sertifikater)) {
        return null;
    }

    const sertifikatListe = props.sertifikater.map((sertifikat, index) => (
        <Normaltekst key={`sertifikater-${index}`} className="underinformasjon">
            {sertifikat.sertifikatKodeNavn}
        </Normaltekst>
    ));

    return (
        <Informasjonsbolk header="Sertifikater" {...props}>
            {sertifikatListe}
            <Normaltekst>
                Disponerer bil: {props.disponererBil? "Ja" : "Nei"}
            </Normaltekst>
        </Informasjonsbolk>
    );
}

export default Sertifikater;