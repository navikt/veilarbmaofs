import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined, omit} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';
import {formaterDato} from "../utils";

function Yrkeserfaring(props: Pick<ArenaPerson, 'yrkeserfaring'>){
    if (isNullOrUndefined(props.yrkeserfaring)) {
        return null;
    }

    const erfaringer = props.yrkeserfaring.map((erfaring, index) => (
        <div key={`yrkeserfaring-${index}`} className="underinformasjon">
            <Element>
                {erfaring.arbeidsgiver}
            </Element>

            <Normaltekst>{erfaring.styrkKodeStillingstittel}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(erfaring.fraDato)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(erfaring.tilDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Yrkeserfaring" headerTypo="ingress" {...omit(props, 'yrkeserfaring')}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default Yrkeserfaring;
