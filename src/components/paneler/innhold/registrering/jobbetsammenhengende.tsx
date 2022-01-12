import React from 'react';
import { OrdinaerRegistrering, Registrering } from '../../../../rest/datatyper/registreringsData';
import FloatGrid from '../../../felles/float-grid';
import { BodyShort, Ingress, Label } from '@navikt/ds-react';

interface Props {
	registrering: Registrering | undefined;
}

export function JobbetSammenhengende(props: Props) {
	if (!props.registrering) {
		return null;
	}

	const ordinaerRegistrering = props.registrering as OrdinaerRegistrering;

	if (!ordinaerRegistrering.profilering) {
		return null;
	}

	return (
		<>
			<Ingress>Hentet fra Aa-registeret</Ingress>
			<FloatGrid columns={2} gap={8}>
				<div>
					<Label> Brukeren har vært sammenhengende i jobb minst 6 av de siste 12 måneder </Label>
					<BodyShort>
						{ordinaerRegistrering.profilering.jobbetSammenhengendeSeksAvTolvSisteManeder ? 'Ja' : 'Nei'}{' '}
					</BodyShort>
				</div>
			</FloatGrid>
		</>
	);
}
