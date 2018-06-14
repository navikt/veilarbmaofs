import * as React from 'react';
import Grid from "../../grid";
import {StringOrNull} from "../felles-typer";
import Aktivitetsfase from "./aktivitetsfase";
import Innsatsgruppe from "./innsatsgruppe";
import Rettighetsperiode from "./rettighetsperiode";
import Status from "./status";
import Vedtak from "./vedtak";
import Vedtaksperiode from "./vedtaksperiode";

interface VedtaksperiodeData {
    fradato: string;
    tildato: string;
}

export interface YtelseData {
    innsatsgruppe: StringOrNull;
    vedtak: StringOrNull;
    status: StringOrNull;
    aktivitetsfase: StringOrNull;
    vedtaksperiode: VedtaksperiodeData;
    rettighetsperiode:StringOrNull;
}

function Ytelser(props: {data: {ytelser: YtelseData}}) {
    const {innsatsgruppe, vedtak, status, aktivitetsfase, rettighetsperiode, vedtaksperiode} = props.data.ytelser;
    return (
        <>
        <Grid columns={5} gap="0.5rem">
            <Innsatsgruppe innsatsgruppe={innsatsgruppe}/>
            <Vedtak vedtak={vedtak} />
            <Status status={status} />
            <Aktivitetsfase aktivitetsfase={aktivitetsfase} />
            <Rettighetsperiode rettighetsperiode={rettighetsperiode}/>
            <Vedtaksperiode vedtaksperiode={vedtaksperiode} />
        </Grid>
        </>
    );
}

export default Ytelser;