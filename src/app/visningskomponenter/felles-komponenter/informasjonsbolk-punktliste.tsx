import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import Informasjonsbolk from "./informasjonsbolk";

interface Props<T> {
    header: string;
    list: T[]
    className?: string;
}

function InformasjonsbolkPunktliste<T>(props: Props<T>) {
    const { header, list, className,...rest} = props;
    const elementer = list.map((element: T, index: number) => (
        <li key={index}>
            <Normaltekst key={element as any}>
                {element}
            </Normaltekst>
        </li>
    ));

    return (
        <Informasjonsbolk header={header} {...rest} className={className}>
            <ul>
                {elementer}
            </ul>
        </Informasjonsbolk>
    );
}

export default InformasjonsbolkPunktliste;