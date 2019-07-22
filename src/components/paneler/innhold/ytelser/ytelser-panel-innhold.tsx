import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Grid from '../../../felles/grid';
import Innsatsgruppe from './innsatsgruppe';
import Vedtaksliste from './vedtaksliste';
import { OppfolgingskontrakterType, VedtakType } from '../../../../rest/datatyper/ytelse';
import { OPPFOLGINGSKONTRAKTER_STATUSER, VEDTAKSSTATUSER } from '../../../../utils/konstanter';
import EMDASH from '../../../../utils/emdash';
import { useFetchYtelser } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { hasData, isPending, hasError } from '@nutgaard/use-fetch';

export const getInnsatsgruppeVisningstekst = (innstatsgruppeListe: OppfolgingskontrakterType[]) => {
    const aktiveOppfolgingskontrakter =
        innstatsgruppeListe && innstatsgruppeListe.filter((kontrakt) => kontrakt.status === OPPFOLGINGSKONTRAKTER_STATUSER.aktiv);
    return aktiveOppfolgingskontrakter.length > 0 ? aktiveOppfolgingskontrakter[0].innsatsgrupper[0] : EMDASH;
};

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
    return vedtaksliste.filter((vedtak) => vedtak.status === VEDTAKSSTATUSER.iverksatt);
};

const YtelserPanelInnhold = () => {
    const {fnr} = useAppStore();
    const ytelser = useFetchYtelser(fnr);

    if (isPending(ytelser)) {
        return <Laster/>;
    } else if (hasError(ytelser)) {
        return <Feilmelding/>;
    } else if (!hasData(ytelser)) {
        return <NoData/>;
    }

    const {oppfolgingskontrakter, vedtaksliste} = ytelser.data;
    const aktivVedtak = getVedtakForVisning(vedtaksliste);
    const aktivInnsatsgruppe = getInnsatsgruppeVisningstekst(oppfolgingskontrakter);

    return (
        <Grid columns={1} gap="0.5rem">
            <Innsatsgruppe oppfolgingskontrakter={aktivInnsatsgruppe} />
            <Vedtaksliste vedtaksliste={aktivVedtak} />
        </Grid>
    );
};

export default YtelserPanelInnhold;
