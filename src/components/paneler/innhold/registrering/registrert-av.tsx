import React from 'react';
import { Registrering } from '../../../../rest/datatyper/registreringsData';
import { BodyShort } from '@navikt/ds-react';

interface RegistrertAvProps {
	registrering: Registrering;
}

const RegistrertAv = (props: RegistrertAvProps) => {
	if (!props.registrering.manueltRegistrertAv) {
		return null;
	}

	const registrertAv = props.registrering.manueltRegistrertAv;
	const { ident, enhet } = registrertAv;

	return <BodyShort className="italic-gra">{`Registrert av: ${ident}, ${enhet.id} ${enhet.navn}`}</BodyShort>;
};

export default RegistrertAv;
