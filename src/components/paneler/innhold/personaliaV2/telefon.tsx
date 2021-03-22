import React from 'react';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { Normaltekst } from 'nav-frontend-typografi';
import {PersonaliaV2Info, PersonaliaTelefon} from "../../../../rest/datatyper/personaliav2";
import EMDASH from '../../../../utils/emdash';
import { isNotEmptyArray } from "../../../../utils";

function TelefonNrMedKilde(props: {telefon: PersonaliaTelefon}) {
	const { telefonNr, master} = props.telefon;

	return (
		<Normaltekst>{`${master}: ${telefonNr}`}</Normaltekst>
	);
}

function Telefon(props: Pick<PersonaliaV2Info, 'telefon'>) {
 	const { telefon, ...rest } = props;

	const telefonListe = isNotEmptyArray(telefon) ? telefon.map((telefon, index) => <TelefonNrMedKilde telefon={telefon} key={index}/>) : EMDASH;

	return (
		<Informasjonsbolk header="Telefon" {...rest}>
			{telefonListe}
		</Informasjonsbolk>
	);
}

export default Telefon;
