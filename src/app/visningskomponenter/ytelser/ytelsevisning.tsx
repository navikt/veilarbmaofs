import * as React from 'react';
import {OPPFOLGINGSKONTRAKTER_STATUSER, VEDTAKSSTATUSER} from "../../konstanter";
import EMDASH from "../../utils/emdash.js";
import Grid from "../../utils/grid";
import {StringOrNull} from "../felles-typer";
import Innsatsgruppe from "./innsatsgruppe";
import Vedtaksliste from "./vedtaksliste";

export interface OppfolgingskontrakterType {
    innsatsgrupper: StringOrNull[];
    status: string;
}

export interface VedtakType {
    aktivitetsfase: StringOrNull;
    vedtakstype: StringOrNull;
    status: StringOrNull;
    fradato: DatoType;
    tildato: DatoType;
}

export interface DatoType {
    year: string,
    month: string,
    day: string
}

export interface YtelseType {
    rettighetsperiode: StringOrNull;
    status: string;
}

export interface YtelseDataType {
    oppfolgingskontrakter: OppfolgingskontrakterType[];
    vedtaksliste: VedtakType[];
    ytelser: YtelseType[];
}

export const getInnsatsgruppeVisningstekst = (InnstatsgruppeListe: OppfolgingskontrakterType[]) => {
    const aktiveOppfolgingskontrakter =
        InnstatsgruppeListe && InnstatsgruppeListe.filter(kontrakt => kontrakt.status === OPPFOLGINGSKONTRAKTER_STATUSER.aktiv);
    return aktiveOppfolgingskontrakter.length > 0 ? aktiveOppfolgingskontrakter[0].innsatsgrupper[0] : EMDASH;
};

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
    return vedtaksliste.filter(vedtak => vedtak.status === VEDTAKSSTATUSER.iverksatt);
};

function YtelseVisning(props: {data: {ytelser: YtelseDataType}}) {
    const {oppfolgingskontrakter, vedtaksliste} = props.data.ytelser;
    const aktivVedtak = getVedtakForVisning(vedtaksliste);
    const aktivInnsatsgruppe = getInnsatsgruppeVisningstekst(oppfolgingskontrakter);
    
    return (
        <>
        <Grid columns={1} gap="0.5rem">
            <Innsatsgruppe oppfolgingskontrakter={aktivInnsatsgruppe} />
            <Vedtaksliste vedtaksliste={aktivVedtak} />
        </Grid>
        </>
    );
}

export default YtelseVisning;