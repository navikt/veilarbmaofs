import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { safeMap, formaterDato, safeSort } from '../../../../utils';
import Hide from '../../../felles/hide';
import { BodyShort, Label } from '@navikt/ds-react';

function Utdanning(props: Pick<ArenaPerson, 'utdanning'>) {
	const { utdanning: arenaUtdanning, ...rest } = props;
	const sortedUtdanning = arenaUtdanning.sort((a, b) => safeSort(b.tilDato, a.tilDato));
	const utdanninger = safeMap(sortedUtdanning, (utdanning, index) => (
		<div key={`utdanning-${index}`} className="underinformasjon">
			<Label className="typo-element">{utdanning.tittel}</Label>

			<BodyShort>{utdanning.studiested}</BodyShort>
			<Hide if={utdanning.beskrivelse == null}>
				<BodyShort className="italic">{utdanning.beskrivelse}</BodyShort>
			</Hide>
			<BodyShort>Fra: {formaterDato(utdanning.fraDato, true)}</BodyShort>
			<BodyShort>Til: {formaterDato(utdanning.tilDato, true)}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Utdanning" headerTypo="ingress" {...rest}>
			{utdanninger}
		</Informasjonsbolk>
	);
}

export default Utdanning;
