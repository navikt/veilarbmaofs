import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeSort, safeMap } from '../../../../utils';
import { ReactComponent as Erfaringsikon } from './ikoner/annen-erfaring.svg';
import { BodyShort, Label } from '@navikt/ds-react';

function AnnenErfaring(props: Pick<ArenaPerson, 'annenErfaring'>) {
	const { annenErfaring: arenaErfaring, ...rest } = props;
	const sortedErfaringer = arenaErfaring.sort((a, b) => safeSort(b.tilDato, a.tilDato));
	const erfaringer = safeMap(sortedErfaringer, (erfaring, index) => (
		<div key={`annenerfaring-${index}`} className="underinformasjon">
			<Label size="small" as="p">
				{erfaring.rolle}
			</Label>

			<BodyShort>{erfaring.beskrivelse}</BodyShort>
			<BodyShort>
				Start- og sluttdato: {formaterDato(erfaring.fraDato, true)} -{' '}
				{erfaring.tilDato ? formaterDato(erfaring.tilDato, true) : 'nå'}
			</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Annen erfaring" headerTypo="ingress" icon={<Erfaringsikon />} {...rest}>
			{erfaringer}
		</Informasjonsbolk>
	);
}

export default AnnenErfaring;
