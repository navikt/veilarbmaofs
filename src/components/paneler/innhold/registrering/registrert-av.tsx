import React from 'react';
import { BodyShort } from '@navikt/ds-react';
import { Registrering } from '../../../../rest/datatyper/registreringsData';

interface RegistrertAvProps {
	registrering: Registrering;
}

const RegistrertAv = (props: RegistrertAvProps) => {
	if (!props.registrering.manueltRegistrertAv) {
		return null;
	}

	const registrertAv = props.registrering.manueltRegistrertAv;
	const { ident, enhet } = registrertAv;
	if (enhet) {
		return <BodyShort className="italic-gra">{`Registrert av: ${ident}, ${enhet.id} ${enhet.navn}`}</BodyShort>;
	} else {
		return <BodyShort className="italic-gra">{`Registrert av: ${ident}`}</BodyShort>;
	}
};

export default RegistrertAv;
