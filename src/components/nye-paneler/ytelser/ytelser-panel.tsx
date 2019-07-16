import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { useAppStoreContext } from '../../../stores/app-store';
import { hasData } from '../../../rest/utils';
import { Laster } from '../../datalasting/laster';
import { Feilmelding } from '../../datalasting/feilmelding';
import Grid from '../../grid';
import Innsatsgruppe from '../../paneler/ytelser/innsatsgruppe';
import Vedtaksliste from '../../paneler/ytelser/vedtaksliste';
import { OppfolgingskontrakterType, VedtakType } from '../../../rest/datatyper/ytelse';
import { OPPFOLGINGSKONTRAKTER_STATUSER, VEDTAKSSTATUSER } from '../../../utils/konstanter';
import EMDASH from '../../../utils/emdash';

export const getInnsatsgruppeVisningstekst = (innstatsgruppeListe: OppfolgingskontrakterType[]) => {
    const aktiveOppfolgingskontrakter =
        innstatsgruppeListe && innstatsgruppeListe.filter((kontrakt) => kontrakt.status === OPPFOLGINGSKONTRAKTER_STATUSER.aktiv);
    return aktiveOppfolgingskontrakter.length > 0 ? aktiveOppfolgingskontrakter[0].innsatsgrupper[0] : EMDASH;
};

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
    return vedtaksliste.filter((vedtak) => vedtak.status === VEDTAKSSTATUSER.iverksatt);
};

const YtelserPanelInnhold = () => {
    const {ytelser} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (!hasData(ytelser)) {
            ytelser.fetch({fnr});
        }
    }, []);

    return (
        <Laster avhengigheter={ytelser}>
            <Feilmelding avhengigheter={ytelser}>
                {() => {
                    const {oppfolgingskontrakter, vedtaksliste} = ytelser.data;
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
                }}
            </Feilmelding>
        </Laster>
    );
};

const YtelserPanel = () => {
    return (
        <Panel name="ytelser" tittel="Ytelser">
            <YtelserPanelInnhold/>
        </Panel>
    );
};

export default YtelserPanel;
