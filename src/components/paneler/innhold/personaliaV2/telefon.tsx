import React from 'react';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {Normaltekst, Undertekst} from 'nav-frontend-typografi';
import {PersonaliaV2Info, PersonaliaTelefon} from "../../../../rest/datatyper/personaliav2";
import EMDASH from '../../../../utils/emdash';
import { isNotEmptyArray } from "../../../../utils";
import {hentKilde} from "../../../../utils/konstanter";

function TelefonNrMedKilde(props: {telefon: PersonaliaTelefon}) {
	const { telefonNr, registrertDato, master} = props.telefon;

	return (
		<div className="overinformasjon underinformasjon">
			<Normaltekst>{telefonNr}</Normaltekst>
			<Undertekst color='#645f5a'>Registrert {registrertDato && registrertDato} <span>{`av ${hentKilde(master)}`}</span> </Undertekst>
		</div>
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
