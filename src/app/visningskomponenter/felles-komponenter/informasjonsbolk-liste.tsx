import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';

import Informasjonsbolk from './informasjonsbolk';

interface Props<T> {
    header: string;
    list: T[];
}

function InformasjonsbolkListe<T>(props: Props<T>) {
    const { header, list, ...rest } = props;
    const elementer = list.map((element: T) => (
        <Normaltekst key={element as any}>{element}</Normaltekst>
    ));

    return (
        <Informasjonsbolk header={header} {...rest}>
            {elementer}
        </Informasjonsbolk>
    );
}

export default InformasjonsbolkListe;
