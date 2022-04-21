import React, { useEffect } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import { useAppStore } from '../../../../stores/app-store';
import {
	fetchTilgorerBrukerUtrulletKontorForVedtaksstotte,
	fetchInnsatsbehov,
	fetchOppfolgingsstatus,
	fetchPersonalia,
	fetchVeileder
} from '../../../../rest/api';
import { Laster } from '../../../felles/fetch';
import {
	hentGeografiskEnhetTekst,
	hentOppfolgingsEnhetTekst,
	hentVeilederTekst,
	mapHovedmalTilTekst,
	mapInnsatsgruppeTilTekst,
	mapServicegruppeTilTekst
} from '../../../../utils/text-mapper';
import { erInnsatsgruppe } from '../../../../utils/arena-status-utils';
import { OrNothing } from '../../../../utils/felles-typer';
import { Hovedmal, Innsatsbehov, Innsatsgruppe } from '../../../../rest/datatyper/innsatsbehov';
import {
	ArenaHovedmalKode,
	ArenaServicegruppeKode,
	OppfolgingsstatusData
} from '../../../../rest/datatyper/oppfolgingsstatus';
import { INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE } from '../../../../rest/datatyper/feature';
import './oppfolging-panel-innhold.less';
import Show from '../../../felles/show';
import { Alert } from '@navikt/ds-react';
import { isPending, isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { PersonaliaInfo } from '../../../../rest/datatyper/personalia';
import { VeilederData } from '../../../../rest/datatyper/veileder';

const OppfolgingPanelInnhold = () => {
	const { fnr, features } = useAppStore();

	const oppfolgingsstatus = usePromise<AxiosResponse<OppfolgingsstatusData>>(() => fetchOppfolgingsstatus(fnr));
	const personalia = usePromise<AxiosResponse<PersonaliaInfo>>(() => fetchPersonalia(fnr));
	const innsatsbehov = usePromise<AxiosResponse<Innsatsbehov>>(() => fetchInnsatsbehov(fnr));
	const veilederId = isResolved(oppfolgingsstatus) ? oppfolgingsstatus.result.data.veilederId : null;
	const veileder = usePromise<AxiosResponse<VeilederData>>(() => fetchVeileder(fnr));
	const tilhorerBrukerUtrulletKontorForVedtaksstotte = usePromise<AxiosResponse<VeilederData>>(() =>
		fetchTilgorerBrukerUtrulletKontorForVedtaksstotte(fnr)
	);

	useEffect(() => {
		if (!isResolved(veileder) && veilederId != null) {
			//		veileder.rerun();
			console.log('veileder.rerun()');
		}
		// TODO: Når use-fetch memoiseres riktig, så legg til alle dependencies
		// eslint-disable-next-line
	}, [oppfolgingsstatus.status]);

	if (isPending(oppfolgingsstatus) || isPending(personalia) || isPending(innsatsbehov)) {
		return <Laster midtstilt={true} />;
	}

	const veilederData = isResolved(veileder) ? veileder.result.data : null;
	const personaliaData = isResolved(personalia) ? personalia.result.data : null;
	const innsatsbehovData = isResolved(innsatsbehov) ? innsatsbehov.result.data : null;
	const oppfolgingsstatusData = isResolved(oppfolgingsstatus) ? oppfolgingsstatus.result.data : null;

	let servicegruppe: OrNothing<ArenaServicegruppeKode> = oppfolgingsstatusData?.servicegruppe;
	let innsatsgruppe: OrNothing<Innsatsgruppe | ArenaServicegruppeKode> = oppfolgingsstatusData?.servicegruppe;
	let hovedmal: OrNothing<Hovedmal | ArenaHovedmalKode> = oppfolgingsstatusData?.hovedmaalkode;

	if (hentInnsatsgruppeOgHovedmalFraVedtaksstotte() && erInnsatsgruppe(servicegruppe)) {
		// Vi bruker servicegruppe fra Arena som master for om vi skal vise servicegruppe eller innsatsgruppe + hovedmål
		// fra vedtaksstøtte dersom det er togglet på. Hvis servicegruppe fra Arena er en innsatsgruppe, så viser vi
		// innsatsgruppe + hovedmål fra vedtaksstøtte. Hvis servicegruppe fra Arena ikke er en innsatsgruppe, så viser
		// vi ikke innsatsgruppe og hovedmål fra vedtaksstøtte, siden bruker da har fått en nyere status i Arena.
		innsatsgruppe = innsatsbehovData?.innsatsgruppe;
		hovedmal = innsatsbehovData?.hovedmal;
	}

	function hentInnsatsgruppeOgHovedmalFraVedtaksstotte() {
		return features[INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE];
	}

	return (
		<>
			<Grid columns={4} gap="1rem">
				<InformasjonsbolkEnkel
					header="Servicegruppe"
					value={mapServicegruppeTilTekst(servicegruppe)}
					defaultValue={EMDASH}
				/>
				<InformasjonsbolkEnkel
					header="Innsatsgruppe"
					value={mapInnsatsgruppeTilTekst(innsatsgruppe)}
					defaultValue={EMDASH}
				/>
				<InformasjonsbolkEnkel
					header="Veileder"
					value={hentVeilederTekst(veilederData)}
					defaultValue={EMDASH}
				/>
				<InformasjonsbolkEnkel
					header="Geografisk enhet"
					value={hentGeografiskEnhetTekst(personaliaData)}
					defaultValue={EMDASH}
				/>
				<InformasjonsbolkEnkel
					header="Oppfølgingsenhet"
					value={hentOppfolgingsEnhetTekst(oppfolgingsstatusData)}
					defaultValue={EMDASH}
				/>
				<InformasjonsbolkEnkel header="Hovedmål" value={mapHovedmalTilTekst(hovedmal)} defaultValue={EMDASH} />
			</Grid>
			<Show
				if={
					isResolved(tilhorerBrukerUtrulletKontorForVedtaksstotte)
						? tilhorerBrukerUtrulletKontorForVedtaksstotte.result.data &&
						  !hentInnsatsgruppeOgHovedmalFraVedtaksstotte()
						: false
				}
			>
				<Alert variant="info" className="alert-hovedmal-vedtaksstotte alertstripe_intern">
					Hovedmål fra oppfølgingsvedtak fattet i Modia vises foreløpig ikke her. For å se dette, gå til fanen
					"Oppfølgingsvedtak".
				</Alert>
			</Show>
		</>
	);
};

export default OppfolgingPanelInnhold;
