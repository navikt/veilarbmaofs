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

    if (ytelser.isLoading) {
        return <Laster/>;
    } else if (ytelser.isError) {
        return <Feilmelding/>;
    }

    return ytelser.data.map(ytelserData => {
        const {oppfolgingskontrakter, vedtaksliste} = ytelserData;
        const aktivVedtak = getVedtakForVisning(vedtaksliste);
        const aktivInnsatsgruppe = getInnsatsgruppeVisningstekst(oppfolgingskontrakter);

        return (
            <Grid columns={1} gap="0.5rem">
                <Innsatsgruppe oppfolgingskontrakter={aktivInnsatsgruppe} />
                <Vedtaksliste vedtaksliste={aktivVedtak} />
            </Grid>
        );
    }).withDefault(<NoData/>);
};

export default YtelserPanelInnhold;
