import { Fullmakter, VergeOgFullmaktData } from '../../../../rest/datatyper/vergeOgFullmakt';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import React from 'react';
import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi';
import { formateLocalDate, isNotEmptyArray } from '../../../../utils';

function FullmaktigEllerFullmaktsgiver(props: { fullmakt: Fullmakter }) {
	const {
		motpartsPersonident,
		motpartsPersonNavn,
		motpartsRolle,
		omraader,
		gyldigFraOgMed,
		gyldigTilOgMed
	} = props.fullmakt;
	const { fornavn, mellomnavn, etternavn } = motpartsPersonNavn;

	const gjeldendeOmraader = omraader.map((omraade, index) => omraade.beskrivelse).join(', ');

	return (
		<div>
			<div className="overinformasjon underinformasjon">
				<UndertekstBold>
					F{motpartsRolle?.substring(1).toLowerCase()}: {motpartsPersonident}
				</UndertekstBold>
				<Normaltekst>{`${fornavn} ${mellomnavn || ''} ${etternavn}`}</Normaltekst>
				<Normaltekst>{`Gjelder ${gjeldendeOmraader}`}</Normaltekst>
				<Normaltekst>Gyldig fra og med: {formateLocalDate(gyldigFraOgMed)}</Normaltekst>
				<Normaltekst>Gyldig til og med: {formateLocalDate(gyldigTilOgMed)}</Normaltekst>
			</div>
		</div>
	);
}

function Fullmakt(props: Pick<VergeOgFullmaktData, 'fullmakt'>) {
	const { fullmakt, ...rest } = props;

	let fullmaktListe;

	if (isNotEmptyArray(fullmakt)) {
		fullmaktListe = fullmakt.map((fullmakt, index) => (
			<FullmaktigEllerFullmaktsgiver fullmakt={fullmakt} key={index} />
		));
	} else {
		return null;
	}

	return (
		<Informasjonsbolk header="Fullmakter" {...rest}>
			{fullmaktListe}
		</Informasjonsbolk>
	);
}

export default Fullmakt;
