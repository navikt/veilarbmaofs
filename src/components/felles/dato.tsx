import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../utils/emdash';
import { StringOrNothing } from '../../utils/felles-typer';
import { formaterDato, isNullOrUndefined } from '../../utils';

function Dato(props: { dato: StringOrNothing }) {
	if (isNullOrUndefined(props.dato)) {
		return <>{EMDASH}</>;
	}

	return <Normaltekst>Fra: {formaterDato(props.dato!)}</Normaltekst>;
}

export default Dato;
