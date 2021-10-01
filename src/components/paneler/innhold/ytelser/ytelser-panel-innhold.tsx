import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Grid from '../../../felles/grid';
import Vedtaksliste from './vedtaksliste';
import { VedtakType } from '../../../../rest/datatyper/ytelse';
import { VEDTAKSSTATUSER } from '../../../../utils/konstanter';
import { useFetchInnsatsbehov, useFetchOppfolgingsstatus, useFetchYtelser } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { isPending, hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import { mapInnsatsgruppeTilTekst } from '../../../../utils/text-mapper';
import EMDASH from '../../../../utils/emdash';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { erInnsatsgruppe } from '../../../../utils/arena-status-utils';

const getVedtakForVisning = (vedtaksliste: VedtakType[]) => {
	return vedtaksliste.filter(vedtak => vedtak.status === VEDTAKSSTATUSER.iverksatt);
};

const YtelserPanelInnhold = () => {
	const { fnr } = useAppStore();
	const ytelser = useFetchYtelser(fnr);
	const oppfolgingsstatus = useFetchOppfolgingsstatus(fnr);
	const innsatsbehov = useFetchInnsatsbehov(fnr);

	if (isPending(ytelser) || isPending(innsatsbehov) || isPending(oppfolgingsstatus)) {
		return <Laster midtstilt={true} />;
	} else if (hasError(ytelser)) {
		return <Feilmelding />;
	} else if (!hasData(ytelser)) {
		return <NoData />;
	}

	const { vedtaksliste } = ytelser.data;
	const aktivVedtak = getVedtakForVisning(vedtaksliste);
	const innsatsbehovData = hasData(innsatsbehov) ? innsatsbehov.data : null;
	const oppfolgingsstatusData = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data : null;

	let innsatsgruppe = innsatsbehovData?.innsatsgruppe
	if (!erInnsatsgruppe(oppfolgingsstatusData?.servicegruppe)) {
		innsatsgruppe = undefined;
	}

	return (
		<Grid columns={1} gap="0.5rem">
			<InformasjonsbolkEnkel
				header="Innsatsgruppe"
				value={mapInnsatsgruppeTilTekst(innsatsgruppe)}
				defaultValue={EMDASH}
			/>
			<Vedtaksliste vedtaksliste={aktivVedtak}/>
		</Grid>
	);
};

export default YtelserPanelInnhold;
