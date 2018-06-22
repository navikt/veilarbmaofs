import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import { isNullOrUndefined } from '../../utils/util';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Yrkeserfaring(props: Pick<ArenaPerson, 'yrkeserfaring'>) {
    if (isNullOrUndefined(props.yrkeserfaring)) {
        return null;
    }

    const erfaringer = props.yrkeserfaring.map((erfaring, index) => (
        <div key={`yrkeserfaring-${index}`} className="underinformasjon">
            <Element>{erfaring.arbeidsgiver}</Element>

            <Normaltekst>{erfaring.styrkKodeStillingstittel}</Normaltekst>
            <Normaltekst>
                Fra: {new Date(erfaring.fraDato).toLocaleDateString()}
            </Normaltekst>
            <Normaltekst>
                Til: {new Date(erfaring.fraDato).toLocaleDateString()}
            </Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Yrkeserfaring" {...props}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default Yrkeserfaring;
