import {Element, Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {formaterDato, safeMap} from "../utils";

function Verv(props: Pick<ArenaPerson, 'verv'>) {
    const {verv: arenaVerv, ...rest} = props;

    const vervliste = safeMap(arenaVerv, (verv, index) => (
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
        <Informasjonsbolk header="Verv" headerTypo="ingress" {...rest}>
            {vervliste}
        </Informasjonsbolk>
    );
}

export default Verv;
