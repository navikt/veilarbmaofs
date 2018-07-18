import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined, omit} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';
import {formaterDato} from "../utils";

function Kurs(props: Pick<ArenaPerson, 'kurs'>) {
    if (isNullOrUndefined(props.kurs)) {
        return null;
    }

    const kurs = props.kurs.map((enkeltKurs, index) => (
        <div key={`kurs-${index}`} className="underinformasjon">
            <Element>
                {enkeltKurs.tittel}
            </Element>
            <Normaltekst>{enkeltKurs.arrangor}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(enkeltKurs.fraDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" headerTypo="ingress" {...omit(props,'kurs')}>
            {kurs}
        </Informasjonsbolk>
    );
}

export default Kurs;
