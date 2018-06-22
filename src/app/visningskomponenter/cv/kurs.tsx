import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import { isNullOrUndefined } from '../../utils/util';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Kurs(props: Pick<ArenaPerson, 'kurs'>) {
    if (isNullOrUndefined(props.kurs)) {
        return null;
    }

    const kurs = props.kurs.map((enkeltKurs, index) => (
        <div key={`kurs-${index}`} className="underinformasjon">
            <Element>{enkeltKurs.tittel}</Element>
            <Normaltekst>{enkeltKurs.arrangor}</Normaltekst>
            <Normaltekst>
                Fra: {new Date(enkeltKurs.fraDato).toLocaleDateString()}
            </Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" {...props}>
            {kurs}
        </Informasjonsbolk>
    );
}

export default Kurs;
