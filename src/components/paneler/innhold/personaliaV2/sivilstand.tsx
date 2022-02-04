import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaSivilstand } from '../../../../rest/datatyper/personalia';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';

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
			<Normaltekst className="innrykk">{formateStringInUpperAndLowerCase(sivilstand.sivilstand)}</Normaltekst>
			{sivilstand.fraDato && (
				<Normaltekst className="innrykk">Fra: {formateLocalDate(sivilstand.fraDato)}</Normaltekst>
			)}
		</Informasjonsbolk>
	);
}

export default Sivilstand;
