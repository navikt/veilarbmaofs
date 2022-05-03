import React from 'react';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { PersonaliaSivilstand, PersonaliaSivilstandNy } from '../../../../rest/datatyper/personaliav2';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNotEmptyArray } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';
import { hentBorMedPartnerBeskrivelse, hentKilde } from '../../../../utils/konstanter';

function SivilstandBolk(props: { sivilstand: PersonaliaSivilstandNy }) {
	const { sivilstand, fraDato, harSammeBosted, master, registrertDato } = props.sivilstand;

	return (
		<div className="overinformasjon underinformasjon">
			<Normaltekst className="innrykk">{formateStringInUpperAndLowerCase(sivilstand)}</Normaltekst>
			<Normaltekst className="innrykk">Fra: {formateLocalDate(fraDato)}</Normaltekst>
			{harSammeBosted && (
				<Normaltekst className="innrykk">{` ${hentBorMedPartnerBeskrivelse(harSammeBosted)}`}</Normaltekst>
			)}
			{sivilstand && (
				<Undertekst className="kilde-tekst">
					Registrert {registrertDato && registrertDato}
					{` ${hentKilde(master)}`}
				</Undertekst>
			)}
		</div>
	);
}

function Sivilstand(props: { sivilstand: PersonaliaSivilstand; sivilstandliste: PersonaliaSivilstandNy[] }) {
	const { sivilstand, sivilstandliste, ...rest } = props;
	console.log('i sivilstand.tsx');
	if (props.sivilstand.sivilstand) {
		return (
			<Informasjonsbolk header="Sivilstand" {...rest}>
				<Normaltekst className="innrykk">{formateStringInUpperAndLowerCase(sivilstand.sivilstand)}</Normaltekst>
				{sivilstand.fraDato && (
					<Normaltekst className="innrykk">Fra: {formateLocalDate(sivilstand.fraDato)}</Normaltekst>
				)}
			</Informasjonsbolk>
		);
	} else {
		const sivilstandListe = isNotEmptyArray(sivilstandliste)
			? sivilstandliste.map((sivilstand, index) => <SivilstandBolk sivilstand={sivilstand} key={index} />)
			: EMDASH;

		return (
			<Informasjonsbolk header="Sivilstand" {...rest}>
				{sivilstandListe}
			</Informasjonsbolk>
		);
	}
}

export default Sivilstand;
