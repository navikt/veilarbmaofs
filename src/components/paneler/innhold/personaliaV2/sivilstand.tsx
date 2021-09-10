import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaSivilstand } from '../../../../rest/datatyper/personalia';
import { formaterDato, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from "../../../../utils/emdash";

function Sivilstand(props: { sivilstand: PersonaliaSivilstand }) {
	const { sivilstand, ...rest } = props;

	if (isNullOrUndefined(props.sivilstand)) {
		return (
			<Informasjonsbolk header="Sivilstand" {...rest}>
				{EMDASH}
			</Informasjonsbolk>
		);
	}

	return (
		<Informasjonsbolk header="Sivilstand" {...rest}>
			<Normaltekst>{sivilstand.sivilstand}</Normaltekst>
			{sivilstand.fraDato && <Normaltekst>Fra: {formaterDato(sivilstand.fraDato)}</Normaltekst>}
		</Informasjonsbolk>
	);
}

export default Sivilstand;
