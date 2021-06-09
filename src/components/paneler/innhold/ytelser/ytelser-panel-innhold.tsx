import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Grid from '../../../felles/grid';
import Vedtaksliste from './vedtaksliste';
import { VedtakType } from '../../../../rest/datatyper/ytelse';
import { VEDTAKSSTATUSER } from '../../../../utils/konstanter';
import { useFetchYtelser } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { isPending, hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
	return vedtaksliste.filter(vedtak => vedtak.status === VEDTAKSSTATUSER.iverksatt);
};

const YtelserPanelInnhold = () => {
	const { fnr } = useAppStore();
	const ytelser = useFetchYtelser(fnr);

	if (isPending(ytelser)) {
		return <Laster midtstilt={true} />;
	} else if (hasError(ytelser)) {
		return <Feilmelding />;
	} else if (!hasData(ytelser)) {
		return <NoData />;
	}

	const { vedtaksliste } = ytelser.data;
	const aktivVedtak = getVedtakForVisning(vedtaksliste);

	return (
		<Grid columns={1} gap="0.5rem">
			<Vedtaksliste vedtaksliste={aktivVedtak}/>
		</Grid>
	);
};

export default YtelserPanelInnhold;
