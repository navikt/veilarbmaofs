import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';
import { JobbetSammenhengende } from './jobbetsammenhengende';
import PersonverninformasjonUtskrift from './personverninformasjon-utskrift';
import { ForeslattProfilering } from './foreslatt-profilering';
import Show from '../../../felles/show';
import { useFetchRegistrering } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { hasError, isPending } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import { HENT_REGISTRERING_FRA_VEILARBPERSON } from '../../../../rest/datatyper/feature';

const RegistreringPanelInnhold = () => {
	const { fnr, features } = useAppStore();

	const registrering = useFetchRegistrering(fnr, features[HENT_REGISTRERING_FRA_VEILARBPERSON]);

	if (isPending(registrering)) {
		return <Laster midtstilt={true} />;
	} else if (hasError(registrering)) {
		return <Feilmelding />;
	} else if (!hasData(registrering)) {
		return <NoData tekst="Brukeren har ikke registrert seg gjennom den nye registreringsløsningen." />;
	}

	const { registrering: brukerRegistrering, type } = registrering.data;

	console.log('registrering', registrering)
	return (
		<>
			<Header registrering={brukerRegistrering} />
			<SporsmalsListe registrering={brukerRegistrering} />
			<JobbetSammenhengende registrering={brukerRegistrering} />
			<Show if={brukerRegistrering && brukerRegistrering.manueltRegistrertAv != null}>
				<PersonverninformasjonUtskrift type={type} />
			</Show>
			<ForeslattProfilering registrering={brukerRegistrering} />
		</>
	);
};

export default RegistreringPanelInnhold;
