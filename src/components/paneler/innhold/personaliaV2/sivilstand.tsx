import React from 'react';
import { PersonaliaSivilstand } from '../../../../rest/datatyper/personalia';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';
import { BodyShort } from '@navikt/ds-react';

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
			<BodyShort className="innrykk">{formateStringInUpperAndLowerCase(sivilstand.sivilstand)}</BodyShort>
			{sivilstand.fraDato && (
				<BodyShort className="innrykk">Fra: {formateLocalDate(sivilstand.fraDato)}</BodyShort>
			)}
		</Informasjonsbolk>
	);
}

export default Sivilstand;
