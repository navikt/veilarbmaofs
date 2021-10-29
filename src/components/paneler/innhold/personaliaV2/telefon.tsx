import React from 'react';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { PersonaliaV2Info, PersonaliaTelefon } from '../../../../rest/datatyper/personaliav2';
import EMDASH from '../../../../utils/emdash';
import { formaterTelefonnummer, isNotEmptyArray } from '../../../../utils';
import { hentKilde } from '../../../../utils/konstanter';

function TelefonNrMedKilde(props: { telefon: PersonaliaTelefon }) {
	const { telefonNr, registrertDato, master } = props.telefon;

	let landkode;
	let telefonnummer = props.telefon.telefonNr;

	if (telefonNr.length > 8) {
		if (telefonNr.substring(0, 3) === '+47') {
			landkode = '+47';
			telefonnummer = telefonNr.substring(3);
		} else if (telefonNr.substring(0, 4) === '0047') {
			landkode = '0047';
			telefonnummer = telefonNr.substring(4);
		}
	}

	return (
		<div className="overinformasjon underinformasjon">
			<Normaltekst>{formaterTelefonnummer(landkode, telefonnummer)}</Normaltekst>
			{telefonNr && (
				<Undertekst className="kilde-tekst">
					<span>
						Registrert {registrertDato && registrertDato}
						{` ${hentKilde(master)}`}
					</span>
				</Undertekst>
			)}
		</div>
	);
}

function Telefon(props: Pick<PersonaliaV2Info, 'telefon'>) {
	const { telefon, ...rest } = props;

	const telefonListe = isNotEmptyArray(telefon)
		? telefon.map((telefon, index) => <TelefonNrMedKilde telefon={telefon} key={index} />)
		: EMDASH;

	return (
		<Informasjonsbolk header="Telefon" {...rest}>
			{telefonListe}
		</Informasjonsbolk>
	);
}

export default Telefon;
