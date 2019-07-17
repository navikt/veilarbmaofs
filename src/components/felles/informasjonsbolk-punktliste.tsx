import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { safeMap } from '../../utils/index';
import Informasjonsbolk from './informasjonsbolk';

interface Props<T> {
    header: string;
    list: T[];
    className?: string;
}

function InformasjonsbolkPunktliste<T>(props: Props<T>) {
    const { header, list, className,...rest} = props;

    const elementer = safeMap(list,(element: T, index: number) => (
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
