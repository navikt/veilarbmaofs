import React, { useEffect } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import { useAppStore } from '../../../../stores/app-store';
import {
	useFetchTilgorerBrukerUtrulletKontorForVedtaksstotte,
	useFetchFeatureToggle,
	useFetchInnsatsbehov,
	useFetchOppfolgingsstatus,
	useFetchPersonalia,
	useFetchVeileder
} from '../../../../rest/api';
import { Laster } from '../../../felles/fetch';
import { isPending } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
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
import { Hovedmal, Innsatsgruppe } from '../../../../rest/datatyper/innsatsbehov';
import { ArenaHovedmalKode, ArenaServicegruppeKode } from '../../../../rest/datatyper/oppfolgingsstatus';
import { INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE } from '../../../../rest/datatyper/feature';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import './oppfolging-panel-innhold.less';
import Show from '../../../felles/show';

const OppfolgingPanelInnhold = () => {
	const { fnr } = useAppStore();
	const oppfolgingsstatus = useFetchOppfolgingsstatus(fnr);
	const personalia = useFetchPersonalia(fnr);
	const innsatsbehov = useFetchInnsatsbehov(fnr);
	const veilederId = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data.veilederId : null;
	const veileder = useFetchVeileder(veilederId, { lazy: true });
	const features = useFetchFeatureToggle();
	const tilhorerBrukerUtrulletKontorForVedtaksstotte = useFetchTilgorerBrukerUtrulletKontorForVedtaksstotte(fnr);

	useEffect(() => {
		if (!hasData(veileder) && veilederId != null) {
			veileder.rerun();
		}
		// TODO: Når use-fetch memoiseres riktig, så legg til alle dependencies
		// eslint-disable-next-line
	}, [oppfolgingsstatus.status]);

	if (isPending(oppfolgingsstatus) || isPending(personalia) || isPending(innsatsbehov)) {
		return <Laster midtstilt={true} />;
	}

	const veilederData = hasData(veileder) ? veileder.data : null;
	const personaliaData = hasData(personalia) ? personalia.data : null;
	const innsatsbehovData = hasData(innsatsbehov) ? innsatsbehov.data : null;
	const oppfolgingsstatusData = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data : null;

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
		return hasData(features) && features.data[INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE];
	}

	return (
		<>
			<Grid columns={4} gap="0.5rem">
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
					hasData(tilhorerBrukerUtrulletKontorForVedtaksstotte)
						? tilhorerBrukerUtrulletKontorForVedtaksstotte.data
						: false
				}
			>
				<AlertStripeInfo className="alert-hovedmal-vedtaksstotte">
					Hovedmål fra oppfølgingsvedtak fattet i Modia vises foreløpig ikke her. For å se dette, gå til fanen
					"Oppfølgingsvedtak".
				</AlertStripeInfo>
			</Show>
		</>
	);
};

export default OppfolgingPanelInnhold;
