import React from 'react';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { Normaltekst } from 'nav-frontend-typografi';
import {PersonaliaV2Info, PersonaliaTelefon} from "../../../../rest/datatyper/personaliav2";

function TelefonNrMedKilde(props: {telefon: PersonaliaTelefon}) {
	const { telefonNr, master} = props.telefon;

	return (
		<Normaltekst>{`${master}: ${telefonNr}`}</Normaltekst>
	);
}

function Telefon(props: Pick<PersonaliaV2Info, 'telefon'>) {
 	const { telefon, ...rest } = props;

	if (telefon.length === 0) {
		return null;
	}
	const telefonListe = telefon.map(telefon => <TelefonNrMedKilde telefon={telefon} key={telefon.telefonNr}/>);

	return (
		<Informasjonsbolk header="Telefon" {...rest}>
			{telefonListe}
		</Informasjonsbolk>
	);
}

export default Telefon;
