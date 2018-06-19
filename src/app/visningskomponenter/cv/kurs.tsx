import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Kurs(props: Pick<ICVInfo, 'kurs'>) {
    if (isNullOrUndefined(props.kurs)) {
        return null;
    }

    const kompetanser = props.kurs.map((kurs, index) => (
        <div key={`kurs-${index}`} className="underinformasjon">
            <Element>
                {kurs.tittel}
            </Element>
            <Normaltekst>{kurs.arrangor}</Normaltekst>
            <Normaltekst>Fra: {new Date(kurs.fraDato).toLocaleDateString()}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" {...props}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kurs;