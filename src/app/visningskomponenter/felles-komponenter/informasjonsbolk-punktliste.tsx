import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';

import Lenke from "nav-frontend-lenker";
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

interface LenkeProps<> {
    header: string;
    list: LenkeTekst[];
}

interface LenkeTekst {
    tips: string;
    tekst: string;
}

export function InformasjonsbolkPunktlisteMedLenke(props: LenkeProps) {
    const { header, list, ...rest} = props;

    const elementer = list.map((element: LenkeTekst, index: number) => (
        <li key={index}>
            <Normaltekst key={index}>
                {element.tekst}
                <Lenke href="#">{element.tips}</Lenke>
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