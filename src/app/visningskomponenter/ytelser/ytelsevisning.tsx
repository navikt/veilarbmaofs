import * as React from 'react';
import {VEDTAKSSTATUSER} from "../../konstanter";
import Grid from "../../utils/grid";
import {StringOrNull} from "../felles-typer";
import Innsatsgruppe from "./innsatsgruppe";
import Vedtaksliste from "./vedtaksliste";
import Ytelseliste from "./ytelseliste";
export interface OppfolgingskontrakterType {
    innsatsgrupper: StringOrNull[];
}

export interface VedtakType {
    aktivitetsfase: StringOrNull;
    vedtakstype: StringOrNull;
    status: StringOrNull;
    fradato: {
        year: "string",
        month: "string",
        day: "string"
    };
    tildato: {
        year: "string",
        month: "string",
        day: "string"
    };
}

export interface YtelseType {
    rettighetsperiode: StringOrNull;
}

export interface YtelseDataType {
    oppfolgingskontrakter: OppfolgingskontrakterType[];
    vedtaksliste: VedtakType[];
    ytelser: YtelseType[];
}

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
    const iverksatteVedtak = vedtaksliste.filter(vedtak => vedtak.status === VEDTAKSSTATUSER.iverksatt);
    return iverksatteVedtak;
};

function YtelseVisning(props: {data: {ytelser: YtelseDataType}}) {
    const {oppfolgingskontrakter, vedtaksliste, ytelser} = props.data.ytelser;
    const aktivVedtak = getVedtakForVisning(vedtaksliste);

    return (
        <>
        <Grid columns={1} gap="0.5rem">
            <Innsatsgruppe oppfolgingskontrakter={oppfolgingskontrakter}/>
            <Vedtaksliste vedtaksliste={aktivVedtak} />
            <Ytelseliste ytelser={ytelser} />
        </Grid>
        </>
    );
}

export default YtelseVisning;