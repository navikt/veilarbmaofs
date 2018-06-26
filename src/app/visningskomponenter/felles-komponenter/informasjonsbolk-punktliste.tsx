import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import Informasjonsbolk from "./informasjonsbolk";

interface Props<T> {
    header: string;
    list: T[]
}

function InformasjonsbolkPunktliste<T>(props: Props<T>) {
    const { header, list, ...rest} = props;
    const elementer = list.map((element: T, index: number) => (
        <li key={index}>
            <Normaltekst key={element as any}>
                {element}
            </Normaltekst>
        </li>
    ));

    return (
        <Informasjonsbolk header={header} {...rest}>
            <ul>
                {elementer}
            </ul>
        </Informasjonsbolk>
    );
}

export default InformasjonsbolkPunktliste;