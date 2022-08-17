import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeSort, safeMap } from '../../../../utils';
import { Office1 } from '@navikt/ds-icons';
import { BodyShort, Label } from '@navikt/ds-react';

function Arbeidserfaring(props: Pick<ArenaPerson, 'arbeidserfaring'>) {
	const { arbeidserfaring: arenaErfaring, ...rest } = props;
	const sortedErfaringer = arenaErfaring.sort((a, b) => safeSort(b.tilDato, a.tilDato));
	const erfaringer = safeMap(sortedErfaringer, (erfaring, index) => (
		<div key={`arbeidserfaring-${index}`} className="underinformasjon">
			<Label>{erfaring.tittel}</Label>

			<BodyShort>{erfaring.arbeidsgiver}</BodyShort>
			<BodyShort>Sted: {erfaring.sted}</BodyShort>
			<BodyShort>
				Start- og sluttdato: {formaterDato(erfaring.fraDato, true)} -{' '}
				{erfaring.tilDato ? formaterDato(erfaring.tilDato, true) : 'nå'}
			</BodyShort>
			{erfaring.beskrivelse && (
				<BodyShort>
					Arbeidsoppgaver: <em>{erfaring.beskrivelse}</em>
				</BodyShort>
			)}
		</div>
	));

	return (
		<Informasjonsbolk header="Arbeidserfaring" headerTypo="ingress" icon={<Office1 />} {...rest}>
			{erfaringer}
		</Informasjonsbolk>
	);
}

export default Arbeidserfaring;
