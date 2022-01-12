import { TilrettelagtKommunikasjonData } from '../../../../rest/datatyper/tilrettelagtKommunikasjon';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import React from 'react';
import { isNullOrUndefined } from '../../../../utils';
import { BodyShort } from '@navikt/ds-react';

function TilrettelagtKommunikasjon(props: { tilrettelagtKommunikasjon: TilrettelagtKommunikasjonData }) {
	const { tilrettelagtKommunikasjon, ...rest } = props;
	const { talespraak, tegnspraak } = tilrettelagtKommunikasjon;

	if (isNullOrUndefined(talespraak) && isNullOrUndefined(tegnspraak)) {
		return null;
	}

	return (
		<Informasjonsbolk header="Tilrettelagt kommunikasjon" {...rest}>
			<div className="overinformasjon">
				{talespraak && <BodyShort>Språktolk: {talespraak}</BodyShort>}
				{tegnspraak && <BodyShort>Tegnspråktolk</BodyShort>}
			</div>
		</Informasjonsbolk>
	);
}

export default TilrettelagtKommunikasjon;
