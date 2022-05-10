import React from 'react';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import {
	Gradering,
	PersonaliaPartner,
	PersonaliaSivilstand,
	PersonaliaSivilstandNy
} from '../../../../rest/datatyper/personaliav2';
import { formateLocalDate, formateStringInUpperAndLowerCase } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';
import {
	egenAnsattTekst,
	graderingBeskrivelsePartner,
	hentBorMedPartnerBeskrivelse,
	hentKilde
} from '../../../../utils/konstanter';

function SivilstandBolk(props: { sivilstand: PersonaliaSivilstandNy }) {
	const { sivilstand, fraDato, harSammeBosted, gradering, master, registrertDato } = props.sivilstand;

	return (
		<div className="overinformasjon underinformasjon">
			<Normaltekst className="innrykk">{formateStringInUpperAndLowerCase(sivilstand)}</Normaltekst>
			<Normaltekst className="innrykk">Fra: {formateLocalDate(fraDato)}</Normaltekst>
			{harSammeBosted && gradering == Gradering.UGRADERT && (
				<Normaltekst className="innrykk">{` ${hentBorMedPartnerBeskrivelse(harSammeBosted)}`}</Normaltekst>
			)}
			{gradering != Gradering.UGRADERT && (
				<Normaltekst className="innrykk">{` ${graderingBeskrivelsePartner(gradering)}`}</Normaltekst>
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

function Sivilstand(props: {
	partner?: PersonaliaPartner;
	sivilstand?: PersonaliaSivilstand;
	sivilstandliste?: PersonaliaSivilstandNy[];
}) {
	const { partner, sivilstand, sivilstandliste, ...rest } = props;
	if (props.sivilstand?.sivilstand) {
		return (
			<Informasjonsbolk header="Sivilstand" {...rest}>
				<Normaltekst className="innrykk">
					{formateStringInUpperAndLowerCase(sivilstand?.sivilstand)}
				</Normaltekst>
				{sivilstand?.fraDato && (
					<Normaltekst className="innrykk">Fra: {formateLocalDate(sivilstand.fraDato)}</Normaltekst>
				)}
				{partner?.harSammeBosted && (
					<Normaltekst className="innrykk">{` ${hentBorMedPartnerBeskrivelse(
						partner.harSammeBosted
					)}`}</Normaltekst>
				)}
				{partner?.gradering && (
					<Normaltekst className="innrykk">{` ${graderingBeskrivelsePartner(
						partner.gradering
					)}`}</Normaltekst>
				)}
				{partner?.erEgenAnsatt && <Normaltekst className="innrykk">{` ${egenAnsattTekst()}`}</Normaltekst>}
			</Informasjonsbolk>
		);
	} else {
		const sivilstandListe = sivilstandliste?.length
			? sivilstandliste?.map((sivilstand, index) => <SivilstandBolk sivilstand={sivilstand} key={index} />)
			: EMDASH;

		return (
			<Informasjonsbolk header="Sivilstand" {...rest}>
				{sivilstandListe}
			</Informasjonsbolk>
		);
	}
}

export default Sivilstand;
