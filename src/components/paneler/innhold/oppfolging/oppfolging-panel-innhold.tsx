import React, { useEffect } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import { useAppStore } from '../../../../stores/app-store';
import {
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
	mapHovedmalFraArenaTilTekst,
	mapInnsatsgruppeFraArenaTilTekst,
	mapServicegruppeFraArenaTilTekst,
} from '../../../../utils/text-mapper';

const OppfolgingPanelInnhold = () => {
	const { fnr } = useAppStore();
	const oppfolgingsstatus = useFetchOppfolgingsstatus(fnr);
	const personalia = useFetchPersonalia(fnr);
	const veilederId = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data.veilederId : null;
	const veileder = useFetchVeileder(veilederId, { lazy: true });

	useEffect(() => {
		if (!hasData(veileder) && veilederId != null) {
			veileder.rerun();
		}
		// TODO: Når use-fetch memoiseres riktig, så legg til alle dependencies
		// eslint-disable-next-line
	}, [oppfolgingsstatus.status]);

	if (isPending(oppfolgingsstatus) || isPending(personalia)) {
		return <Laster midtstilt={true} />;
	}

	const veilederData = hasData(veileder) ? veileder.data : null;
	const personaliaData = hasData(personalia) ? personalia.data : null;
	const oppfolgingsstatusData = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data : null;

	return (
		<Grid columns={4} gap="0.5rem">
			<InformasjonsbolkEnkel
				header="Servicegruppe"
				value={mapServicegruppeFraArenaTilTekst(oppfolgingsstatusData?.servicegruppe)}
				defaultValue={EMDASH}
			/>
			<InformasjonsbolkEnkel
				header="Innsatsgruppe"
				value={mapInnsatsgruppeFraArenaTilTekst(oppfolgingsstatusData?.servicegruppe)}
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
				value={mapHovedmalFraArenaTilTekst(oppfolgingsstatusData?.hovedmaalkode)}
				defaultValue={EMDASH}
			/>
		</Grid>
	);
};

export default OppfolgingPanelInnhold;
