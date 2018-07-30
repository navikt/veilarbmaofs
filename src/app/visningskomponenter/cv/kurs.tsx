import {Element, Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {formaterDato, safeMap} from "../utils";

function Kurs(props: Pick<ArenaPerson, 'kurs'>) {
    const {kurs: arenaKurs, ...rest} = props;

    const kurs = safeMap(arenaKurs, (enkeltKurs, index) => (
        <div key={`kurs-${index}`} className="underinformasjon">
            <Element>
                {enkeltKurs.tittel}
            </Element>
            <Normaltekst>{enkeltKurs.arrangor}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(enkeltKurs.fraDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" headerTypo="ingress" {...rest}>
            {kurs}
        </Informasjonsbolk>
    );
}

export default Kurs;
