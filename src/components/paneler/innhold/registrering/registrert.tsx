import { Ingress } from '@navikt/ds-react';
import { Registrering } from '../../../../rest/datatyper/registreringsData';
import RegistrertTid from './registrert-tid';
import RegistrertAv from './registrert-av';

export function Header(props: { registrering?: Registrering }) {
	if (!props.registrering) {
		return null;
	}

	const ingressTekst = props.registrering.manueltRegistrertAv
		? 'Registrert av NAV'
		: 'Brukerens svar fra registreringen';

	return (
		<>
			<Ingress>{ingressTekst}</Ingress>
			<RegistrertTid opprettetDato={props.registrering.opprettetDato} />
			<RegistrertAv registrering={props.registrering} />
		</>
	);
}
