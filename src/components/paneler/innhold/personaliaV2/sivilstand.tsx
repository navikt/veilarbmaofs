import React from 'react';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Gradering, PersonaliaPartner, PersonaliaSivilstandNy } from '../../../../rest/datatyper/personaliav2';
import { formateLocalDate, formateStringInUpperAndLowerCaseSivilstand } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';
import {
	egenAnsattTekst,
	graderingBeskrivelsePartner,
	hentBorMedPartnerBeskrivelse,
	hentKilde
} from '../../../../utils/konstanter';

function SivilstandBolk(props: { sivilstand: PersonaliaSivilstandNy }) {
	const { sivilstand, fraDato, skjermet, relasjonsBosted, gradering, master, registrertDato } = props.sivilstand;

	return (
		<div className="overinformasjon underinformasjon">
			<Normaltekst className="innrykk">{formateStringInUpperAndLowerCaseSivilstand(sivilstand)}</Normaltekst>
			{fraDato && <Normaltekst className="innrykk">Fra: {formateLocalDate(fraDato)}</Normaltekst>}
			{sivilstand && (
				<Undertekst className="kilde-tekst">
					Registrert {registrertDato && formateLocalDate(registrertDato)}
					{` ${hentKilde(master)}`}
				</Undertekst>
			)}
			{relasjonsBosted && (
				<Normaltekst className="innrykk">{` ${hentBorMedPartnerBeskrivelse(relasjonsBosted)}`}</Normaltekst>
			)}
			{gradering && gradering !== Gradering.UGRADERT && (
				<Normaltekst className="innrykk">{` ${graderingBeskrivelsePartner(gradering)}`}</Normaltekst>
			)}
			{skjermet && <Normaltekst className="innrykk">{` ${egenAnsattTekst()}`}</Normaltekst>}
		</div>
	);
}

function Sivilstand(props: { partner?: PersonaliaPartner; sivilstandliste?: PersonaliaSivilstandNy[] }) {
	const { partner, sivilstandliste, ...rest } = props;
	const sivilstandListe = sivilstandliste?.length
		? sivilstandliste?.map((sivilstand, index) => <SivilstandBolk sivilstand={sivilstand} key={index} />)
		: EMDASH;

	return (
		<Informasjonsbolk header="Sivilstand" {...rest}>
			{sivilstandListe}
		</Informasjonsbolk>
	);
}

export default Sivilstand;
