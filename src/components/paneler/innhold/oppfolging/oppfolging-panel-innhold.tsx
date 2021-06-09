import React, { useEffect } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import { useAppStore } from '../../../../stores/app-store';
import {
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

const OppfolgingPanelInnhold = () => {
	const { fnr } = useAppStore();
	const oppfolgingsstatus = useFetchOppfolgingsstatus(fnr);
	const personalia = useFetchPersonalia(fnr);
	const innsatsbehov = useFetchInnsatsbehov(fnr);
	const veilederId = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data.veilederId : null;
	const veileder = useFetchVeileder(veilederId, { lazy: true });

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

	return (
		<Grid columns={4} gap="0.5rem">
			<InformasjonsbolkEnkel
				header="Servicegruppe"
				value={mapServicegruppeTilTekst(oppfolgingsstatusData?.servicegruppe)}
				defaultValue={EMDASH}
			/>
			<InformasjonsbolkEnkel
				header="Innsatsgruppe"
				value={innsatsbehov.statusCode === 204 ? 'Ikke vurdert' : mapInnsatsgruppeTilTekst(innsatsbehovData?.innsatsgruppe)}
				defaultValue={EMDASH}
			/>
			<InformasjonsbolkEnkel header="Veileder" value={hentVeilederTekst(veilederData)} defaultValue={EMDASH} />
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
			<InformasjonsbolkEnkel
				header="Hovedmål"
				value={mapHovedmalTilTekst(innsatsbehovData?.hovedmal)}
				defaultValue={EMDASH}
			/>
		</Grid>
	);
};

export default OppfolgingPanelInnhold;
