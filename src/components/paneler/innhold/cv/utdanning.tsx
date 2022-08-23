import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { safeMap, formaterDato, safeSort } from '../../../../utils';
import Hide from '../../../felles/hide';
import { ReactComponent as Utdanningsikon } from './ikoner/utdanning.svg';
import { BodyShort, Label } from '@navikt/ds-react';

function Utdanning(props: Pick<ArenaPerson, 'utdanning'>) {
	const { utdanning: arenaUtdanning, ...rest } = props;
	const sortedUtdanning = arenaUtdanning.sort((a, b) => safeSort(b.tilDato, a.tilDato));
	const utdanninger = safeMap(sortedUtdanning, (utdanning, index) => (
		<div key={`utdanning-${index}`} className="underinformasjon">
			<Label>{utdanning.tittel}</Label>

			<BodyShort className="dypbla">{utdanning.studiested}</BodyShort>
			<BodyShort>{utdanning.utdanningsnivaa}</BodyShort>
			<BodyShort>
				Start- og sluttdato: {formaterDato(utdanning.fraDato, true)} -{' '}
				{utdanning.tilDato ? formaterDato(utdanning.tilDato, true) : 'nå'}
			</BodyShort>
			{utdanning.beskrivelse && (
				<BodyShort>
					Beskrivelse: <em>{utdanning.beskrivelse}</em>
				</BodyShort>
			)}
		</div>
	));

	return (
		<Informasjonsbolk header="Utdanning" headerTypo="ingress" icon={<Utdanningsikon />} {...rest}>
			{utdanninger}
		</Informasjonsbolk>
	);
}

export default Utdanning;
