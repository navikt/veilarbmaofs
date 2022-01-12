import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import Hide from '../../../felles/hide';
import { formaterDato, safeSort, safeMap } from '../../../../utils';
import { BodyShort, Label } from '@navikt/ds-react';

function Arbeidserfaring(props: Pick<ArenaPerson, 'arbeidserfaring'>) {
	const { arbeidserfaring: arenaErfaring, ...rest } = props;
	const sortedErfaringer = arenaErfaring.sort((a, b) => safeSort(b.tilDato, a.tilDato));
	const erfaringer = safeMap(sortedErfaringer, (erfaring, index) => (
		<div key={`arbeidserfaring-${index}`} className="underinformasjon">
			<Label>{erfaring.arbeidsgiver}</Label>
			<BodyShort>{erfaring.tittel}</BodyShort>
			<Hide if={erfaring.beskrivelse == null}>
				<BodyShort className="italic">{erfaring.beskrivelse}</BodyShort>
			</Hide>
			<BodyShort>Fra: {formaterDato(erfaring.fraDato, true)}</BodyShort>
			<BodyShort>Til: {formaterDato(erfaring.tilDato, true)}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Arbeidserfaring" headerTypo="ingress" {...rest}>
			{erfaringer}
		</Informasjonsbolk>
	);
}

export default Arbeidserfaring;
