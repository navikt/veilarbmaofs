import {Element, Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {formaterDato, safeMap} from "../utils";

function Yrkeserfaring(props: Pick<ArenaPerson, 'yrkeserfaring'>) {
    const {yrkeserfaring: arenaErfaring, ...rest} = props;
    const erfaringer = safeMap(arenaErfaring, (erfaring, index) => (
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
        <Informasjonsbolk header="Yrkeserfaring" headerTypo="ingress" {...rest}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default Yrkeserfaring;
