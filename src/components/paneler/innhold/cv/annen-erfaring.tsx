import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeSort, safeMap } from '../../../../utils';
import { BodyShort, Label } from '@navikt/ds-react';

function AnnenErfaring(props: Pick<ArenaPerson, 'annenErfaring'>) {
	const { annenErfaring: arenaErfaring, ...rest } = props;
	const sortedErfaringer = arenaErfaring.sort((a, b) => safeSort(b.tilDato, a.tilDato));
	const erfaringer = safeMap(sortedErfaringer, (erfaring, index) => (
		<div key={`annenerfaring-${index}`} className="underinformasjon">
			<Label>{erfaring.rolle}</Label>
			<BodyShort>{erfaring.beskrivelse}</BodyShort>
			<BodyShort>Fra: {formaterDato(erfaring.fraDato, true)}</BodyShort>
			<BodyShort>Til: {formaterDato(erfaring.tilDato, true)}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Annen erfaring" headerTypo="ingress" {...rest}>
			{erfaringer}
		</Informasjonsbolk>
	);
}

export default AnnenErfaring;
