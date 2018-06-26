import { Normaltekst } from "nav-frontend-typografi";
import Element from "nav-frontend-typografi/lib/element";
import * as React from 'react';
import {skillUtTipsTilDegFraTekst} from "../../utils/util";
import {Ekspanderbar} from "../felles-komponenter/ekspanderbar";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {Aktivitet, Raad} from "./jobbsokerkompetanse";

function Aktivitetsvisning(props: { data: Aktivitet[], hidden: boolean }) {
    const aktiviteter = props.hidden ? null :
        props.data.map((raadaktivitet, index) => {
            const html = {__html: raadaktivitet.innhold};
            return <li key={index}>
                <Element>{raadaktivitet.tittel}</Element>
                <Normaltekst><span dangerouslySetInnerHTML={html} /></Normaltekst>
            </li>;
        });
    return <ul>{aktiviteter}</ul>;
}

export function RaadVisning(props: { raad: Raad }) {
    const { raadAktiviteter, raadIngress, raadTittel, raadKey } = props.raad;
    const ingressOgTips: string[] = skillUtTipsTilDegFraTekst(raadIngress);
    const tips = ingressOgTips[1];
    const tekst = ingressOgTips[0];

    return <Informasjonsbolk header={raadTittel} key={raadKey}>
        <>
            <Ekspanderbar tekst={tekst} lenketekst={tips}>
                <Aktivitetsvisning data={raadAktiviteter} hidden={false}/>
            </Ekspanderbar>
        </>
    </Informasjonsbolk>
}
