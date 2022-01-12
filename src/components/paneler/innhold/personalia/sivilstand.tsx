import React from 'react';
import { PersonaliaSivilstand } from '../../../../rest/datatyper/personalia';
import { formaterDato, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { BodyShort } from '@navikt/ds-react';

function Sivilstand(props: { sivilstand: PersonaliaSivilstand }) {
	if (isNullOrUndefined(props.sivilstand)) {
		return null;
	}

	const { sivilstand, ...rest } = props;

	return (
		<Informasjonsbolk header="Sivilstand" {...rest}>
			<BodyShort>{sivilstand.sivilstand}</BodyShort>
			<BodyShort>Fra: {formaterDato(sivilstand.fraDato)}</BodyShort>
		</Informasjonsbolk>
	);
}

export default Sivilstand;
