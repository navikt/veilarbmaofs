import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
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
		return <Normaltekst className="italic-gra">{`Registrert av: ${ident}, ${enhet.id} ${enhet.navn}`}</Normaltekst>;
	} else {
		return <Normaltekst className="italic-gra">{`Registrert av: ${ident}`}</Normaltekst>;
	}
};

export default RegistrertAv;
