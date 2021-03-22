import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaSivilstand } from '../../../../rest/datatyper/personalia';
import { formaterDato, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

function Sivilstand(props: { sivilstand: PersonaliaSivilstand }) {
	if (isNullOrUndefined(props.sivilstand)) {
		return null;
	}

	const { sivilstand, ...rest } = props;

	return (
		<Informasjonsbolk header="Sivilstand" {...rest}>
			<Normaltekst>{sivilstand.sivilstand}</Normaltekst>
			<Normaltekst>Fra: {formaterDato(sivilstand.fraDato)}</Normaltekst>
		</Informasjonsbolk>
	);
}

export default Sivilstand;
