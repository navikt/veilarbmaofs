import React from 'react';
import { BodyShort, Detail } from '@navikt/ds-react';
import { Gradering, PersonaliaPartner, PersonaliaSivilstandNy } from '../../../../rest/datatyper/personaliav2';
import { formateLocalDate, formatStringInUpperAndLowerCaseUnderscore } from '../../../../utils';
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
			<BodyShort className="innrykk">{formatStringInUpperAndLowerCaseUnderscore(sivilstand)}</BodyShort>
			{fraDato && <BodyShort className="innrykk">Fra: {formateLocalDate(fraDato)}</BodyShort>}
			{sivilstand && (
				<Detail size="small" className="kilde-tekst">
					Registrert {registrertDato && formateLocalDate(registrertDato)}
					{` ${hentKilde(master)}`}
				</Detail>
			)}
			{relasjonsBosted && (
				<BodyShort className="innrykk">{` ${hentBorMedPartnerBeskrivelse(relasjonsBosted)}`}</BodyShort>
			)}
			{gradering && gradering !== Gradering.UGRADERT && (
				<BodyShort className="innrykk">{` ${graderingBeskrivelsePartner(gradering)}`}</BodyShort>
			)}
			{skjermet && <BodyShort className="innrykk">{` ${egenAnsattTekst()}`}</BodyShort>}
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
