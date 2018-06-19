import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Verv(props: Pick<ICVInfo, 'verv'>) {
    if (isNullOrUndefined(props.verv)) {
        return null;
    }

    const vervliste = props.verv.map((verv, index) => (
        <div key={`verv-${index}`} className="underinformasjon">
            <Element>
                {verv.organisasjon}
            </Element>
            <Normaltekst>{verv.tittel}</Normaltekst>
            <Normaltekst>Fra: {new Date(verv.fraDato).toLocaleDateString()}</Normaltekst>
            <Normaltekst>Til: {new Date(verv.fraDato).toLocaleDateString()}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Verv" {...props}>
            {vervliste}
        </Informasjonsbolk>
    );
}

export default Verv;