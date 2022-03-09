import React from 'react';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
// @ts-ignore
import { PersonaliaV2Info, PersonaliaSivilstand } from '../../../../rest/datatyper/personaliaV2';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNotEmptyArray } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';
import { hentBorMedPartnerBeskrivelse, hentKilde } from '../../../../utils/konstanter';

function SivilstandBolk(props: { sivilstandbolk: PersonaliaSivilstand }) {
	const { sivilstand, fraDato, harSammeBosted, registrertDato, master } = props.sivilstandbolk;
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

function Sivilstand(props: Pick<PersonaliaV2Info, 'sivilstand'>) {
	const { sivilstand, ...rest } = props;

	const sivilstandListe = isNotEmptyArray(sivilstand)
		? sivilstand.map((sivilstand, index) => <SivilstandBolk sivilstandbolk={sivilstand} key={index} />)
		: EMDASH;

	return (
		<Informasjonsbolk header="Sivilstand" {...rest}>
			{sivilstandListe}
		</Informasjonsbolk>
	);
}

export default Sivilstand;
