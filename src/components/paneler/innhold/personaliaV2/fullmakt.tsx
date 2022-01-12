import { Fullmakter, VergeOgFullmaktData } from '../../../../rest/datatyper/vergeOgFullmakt';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import React from 'react';
import { formateLocalDate, isNotEmptyArray } from '../../../../utils';
import { BodyShort, Detail } from '@navikt/ds-react';

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
			<div className="overinformasjon underinformasjon innrykk">
				<Detail>
					F{motpartsRolle?.substring(1).toLowerCase()}: {motpartsPersonident}
				</Detail>
				<BodyShort>{`${fornavn} ${mellomnavn || ''} ${etternavn}`}</BodyShort>
				<BodyShort>{`Gjelder ${gjeldendeOmraader}`}</BodyShort>
				<BodyShort>Gyldig fra og med: {formateLocalDate(gyldigFraOgMed)}</BodyShort>
				<BodyShort>Gyldig til og med: {formateLocalDate(gyldigTilOgMed)}</BodyShort>
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
