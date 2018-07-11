import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';
import {formaterDato} from "../utils";

function Verv(props: Pick<ArenaPerson, 'verv'>) {
    if (isNullOrUndefined(props.verv)) {
        return null;
    }

    const vervliste = props.verv.map((verv, index) => (
        <div key={`verv-${index}`} className="underinformasjon">
            <Element>
                {verv.organisasjon}
            </Element>
            <Normaltekst>{verv.tittel}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(verv.fraDato)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(verv.tilDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Verv" {...props}>
            {vervliste}
        </Informasjonsbolk>
    );
}

export default Verv;
