import React from 'react';
import { AxiosResponse } from 'axios';
import { useAppStore } from '../../../../stores/app-store';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';
import { JobbetSammenhengende } from './jobbetsammenhengende';
import PersonverninformasjonUtskrift from './personverninformasjon-utskrift';
import { ForeslattProfilering } from './foreslatt-profilering';
import Show from '../../../felles/show';
import { fetchRegistrering } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { RegistreringsData } from '../../../../rest/datatyper/registreringsData';
import { isNotStartedOrPending, isRejected, isResolved, usePromise } from '../../../../utils/use-promise';

const RegistreringPanelInnhold = (): React.ReactElement => {
	const { fnr } = useAppStore();

	const registrering = usePromise<AxiosResponse<RegistreringsData>>(() => fetchRegistrering(fnr));

	if (isNotStartedOrPending(registrering)) {
		return <Laster midtstilt={true} />;
	} else if (isRejected(registrering)) {
		return <Feilmelding />;
	} else if (!registrering.result.data) {
		return <NoData tekst="Brukeren har ikke registrert seg gjennom den nye registreringsløsningen." />;
	}

	const { registrering: brukerRegistrering, type } = registrering.result.data;

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
