import * as React from 'react';
import {VedtakType, YtelseDataType} from "../../datatyper/ytelse";
import {VEDTAKSSTATUSER} from "../../konstanter";
import Grid from "../../utils/grid";
import Innsatsgruppe from "./innsatsgruppe";
import Vedtaksliste from "./vedtaksliste";
import Ytelseliste from "./ytelseliste";

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
    return vedtaksliste.filter(vedtak => vedtak.status === VEDTAKSSTATUSER.iverksatt);
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