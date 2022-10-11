import React, { useEffect, useState } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import { useAppStore } from '../../../../stores/app-store';
import {
	fetchTilgorerBrukerUtrulletKontorForVedtaksstotte,
	fetchSiste14aVedtak,
	fetchOppfolgingsstatus,
	fetchPersonaliaV2,
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
import { Hovedmal, Siste14aVedtak, Innsatsgruppe } from '../../../../rest/datatyper/siste14aVedtak';
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
import { PersonaliaV2Info } from '../../../../rest/datatyper/personaliav2';
import { VeilederData } from '../../../../rest/datatyper/veileder';

const OppfolgingPanelInnhold = () => {
	const { fnr, features } = useAppStore();

	const oppfolgingsstatus = usePromise<AxiosResponse<OppfolgingsstatusData>>(() => fetchOppfolgingsstatus(fnr));
	const personalia = usePromise<AxiosResponse<PersonaliaV2Info>>(() => fetchPersonaliaV2(fnr));
	const siste14aVedtak = usePromise<AxiosResponse<Siste14aVedtak>>(() => fetchSiste14aVedtak(fnr));
	const veilederId = isResolved(oppfolgingsstatus) ? oppfolgingsstatus.result.data.veilederId : null;
	const [veileder, setVeileder] = useState<AxiosResponse<VeilederData> | null>(null);
	const tilhorerBrukerUtrulletKontorForVedtaksstotte = usePromise<AxiosResponse<VeilederData>>(() =>
		fetchTilgorerBrukerUtrulletKontorForVedtaksstotte(fnr)
	);

	useEffect(() => {
		if (!veileder && veilederId != null) {
			fetchVeileder(veilederId).then(data => {
				setVeileder(data);
			});
		}
		// TODO: Når use-fetch memoiseres riktig, så legg til alle dependencies
		// eslint-disable-next-line
	}, [oppfolgingsstatus.status]);

	if (isPending(oppfolgingsstatus) || isPending(personalia) || isPending(siste14aVedtak)) {
		return <Laster midtstilt={true} />;
	}

	const veilederData = veileder ? veileder.data : null;
	const personaliaData = isResolved(personalia) ? personalia.result.data : null;
	const siste14aVedtakData = isResolved(siste14aVedtak) ? siste14aVedtak.result.data : null;
	const oppfolgingsstatusData = isResolved(oppfolgingsstatus) ? oppfolgingsstatus.result.data : null;

	let servicegruppe: OrNothing<ArenaServicegruppeKode> = oppfolgingsstatusData?.servicegruppe;
	let innsatsgruppe: OrNothing<Innsatsgruppe | ArenaServicegruppeKode> = oppfolgingsstatusData?.servicegruppe;
	let hovedmal: OrNothing<Hovedmal | ArenaHovedmalKode> = oppfolgingsstatusData?.hovedmaalkode;

	if (hentInnsatsgruppeOgHovedmalFraVedtaksstotte() && erInnsatsgruppe(servicegruppe)) {
		// Vi bruker servicegruppe fra Arena som master for om vi skal vise servicegruppe eller innsatsgruppe + hovedmål
		// fra vedtaksstøtte dersom det er togglet på. Hvis servicegruppe fra Arena er en innsatsgruppe, så viser vi
		// innsatsgruppe + hovedmål fra vedtaksstøtte. Hvis servicegruppe fra Arena ikke er en innsatsgruppe, så viser
		// vi ikke innsatsgruppe og hovedmål fra vedtaksstøtte, siden bruker da har fått en nyere status i Arena.
		innsatsgruppe = siste14aVedtakData?.innsatsgruppe;
		hovedmal = siste14aVedtakData?.hovedmal;
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
