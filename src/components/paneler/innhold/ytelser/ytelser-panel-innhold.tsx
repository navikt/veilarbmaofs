import { useAppStore } from '../../../../stores/app-store';
import Grid from '../../../felles/grid';
import Vedtaksliste from './vedtaksliste';
import { VedtakType, YtelseData } from '../../../../rest/datatyper/ytelse';
import { VEDTAKSSTATUSER } from '../../../../utils/konstanter';
import { fetchOppfolgingsstatus, fetchYtelser } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { isNotStartedOrPending, isRejected, isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { OppfolgingsstatusData } from '../../../../rest/datatyper/oppfolgingsstatus';

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
	return vedtaksliste.filter(vedtak => vedtak.status === VEDTAKSSTATUSER.iverksatt);
};

const YtelserPanelInnhold = () => {
	const { fnr } = useAppStore();
	const ytelser = usePromise<AxiosResponse<YtelseData>>(() => fetchYtelser(fnr));
	const oppfolgingsstatus = usePromise<AxiosResponse<OppfolgingsstatusData>>(() => fetchOppfolgingsstatus(fnr));

	if (isNotStartedOrPending(ytelser) || isNotStartedOrPending(oppfolgingsstatus)) {
		return <Laster midtstilt={true} />;
	} else if (isRejected(ytelser)) {
		return <Feilmelding />;
	} else if (!isResolved(ytelser)) {
		return <NoData />;
	}

	const { vedtaksliste } = ytelser.result.data;
	const aktivVedtak = getVedtakForVisning(vedtaksliste);

	return (
		<Grid columns={1} gap="0.5rem">
			<Vedtaksliste vedtaksliste={aktivVedtak} />
		</Grid>
	);
};

export default YtelserPanelInnhold;
