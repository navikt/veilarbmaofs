import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../../utils';
import { BodyShort } from '@navikt/ds-react';

type Props = Pick<ArenaPerson, 'andreGodkjenninger'>;

function AndreGodkjenninger(props: Props) {
	const { andreGodkjenninger, ...rest } = props;

	const annenGodkjenningListe = safeMap(andreGodkjenninger, (annengGodkjenning, index) => (
		<div key={`andregodkjenninger-${index}`} className="underinformasjon">
			<BodyShort key={`andregodkjenninger-${index}`} className="underinformasjon">
				{annengGodkjenning.tittel}
			</BodyShort>
			<BodyShort>Gjennomført dato: {formaterDato(annengGodkjenning.gjennomfortDato, true)}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Andre godkjenninger" headerTypo="ingress" {...rest}>
			{annenGodkjenningListe}
		</Informasjonsbolk>
	);
}

export default AndreGodkjenninger;
