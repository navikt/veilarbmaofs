import React, { useEffect } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import { HovedmaalkodeMap, OppfolgingsstatusData } from '../../../../rest/datatyper/oppfolgingsstatus';
import { StringOrNothing } from '../../../../utils/felles-typer';
import { PersonaliaInfo } from '../../../../rest/datatyper/personalia';
import { VeilederData } from '../../../../rest/datatyper/veileder';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchOppfolgingsstatus, useFetchPersonalia, useFetchVeileder } from '../../../../rest/api';
import { Laster } from '../../../felles/fetch';
import { isPending } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import Innsatsgruppe from '../ytelser/innsatsgruppe';

function hentOppfolgingsEnhetTekst(oppfolgingsstatus: OppfolgingsstatusData | null): StringOrNothing {
	if (!oppfolgingsstatus || !oppfolgingsstatus.oppfolgingsenhet) {
		return null;
	}

	const {
		oppfolgingsenhet: { enhetId, navn }
	} = oppfolgingsstatus;
	return `${enhetId} ${navn}`;
}

function hentGeografiskEnhetTekst(personalia: PersonaliaInfo | null): StringOrNothing {
	if (!personalia || !personalia.geografiskEnhet) {
		return null;
	}

	const {
		geografiskEnhet: { enhetsnummer, navn }
	} = personalia;
	return `${enhetsnummer} ${navn}`;
}

function hentVeilederTekst(veileder: VeilederData | null): StringOrNothing {
	if (!veileder) {
		return null;
	}

	return `${veileder.ident} ${veileder.navn}`;
}

function hentHovedmaalkodeTekst(oppfolgingsstatus: OppfolgingsstatusData | null): StringOrNothing {
	if (!oppfolgingsstatus || !oppfolgingsstatus.hovedmaalkode) {
		return null;
	}

	return HovedmaalkodeMap[oppfolgingsstatus.hovedmaalkode];
}

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
		return <Laster />;
	}

	const veilederData = hasData(veileder) ? veileder.data : null;
	const personaliaData = hasData(personalia) ? personalia.data : null;
	const oppfolgingsstatusData = hasData(oppfolgingsstatus) ? oppfolgingsstatus.data : null;

	return (
		<Grid columns={4} gap="0.5rem">
			<Innsatsgruppe oppfolgingsstatus={oppfolgingsstatusData}/>
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
				value={hentHovedmaalkodeTekst(oppfolgingsstatusData)}
				defaultValue={EMDASH}
			/>
		</Grid>
	);
};

export default OppfolgingPanelInnhold;
