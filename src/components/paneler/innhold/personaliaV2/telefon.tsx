import React from 'react';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../../../utils/emdash';

function Telefon(props: { telefon: string[] }) {

 const { telefon, ...rest } = props;

	if (telefon.length == 0) {
		return (
			<Informasjonsbolk header="telefon" {...rest}>
				{EMDASH}
			</Informasjonsbolk>
		);
	}

 return (
		<Informasjonsbolk header="Telefon" {...rest}>
			{ telefon.map(telefonnummer => <Normaltekst key={telefonnummer}>{telefonnummer}</Normaltekst>) }
		</Informasjonsbolk>
	);
}

export default Telefon;
