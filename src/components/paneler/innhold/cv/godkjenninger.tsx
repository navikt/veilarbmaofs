import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../../utils';
import { BodyShort } from '@navikt/ds-react';

type Props = Pick<ArenaPerson, 'godkjenninger'>;

function Godkjenninger(props: Props) {
	const { godkjenninger, ...rest } = props;

	const godkjenningListe = safeMap(godkjenninger, (godkjenning, index) => (
		<div key={`godkjenninger-${index}`} className="underinformasjon">
			<BodyShort key={`godkjenninger-${index}`} className="underinformasjon">
				{godkjenning.tittel}
			</BodyShort>
			<BodyShort>Gjennomført dato: {formaterDato(godkjenning.gjennomfortDato, true)}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Offentlige godkjenninger" headerTypo="ingress" {...rest}>
			{godkjenningListe}
		</Informasjonsbolk>
	);
}

export default Godkjenninger;
