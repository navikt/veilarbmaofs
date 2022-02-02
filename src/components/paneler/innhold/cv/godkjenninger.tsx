import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../../utils';

type Props = Pick<ArenaPerson, 'godkjenninger'>;

function Godkjenninger(props: Props) {
	const { godkjenninger, ...rest } = props;

	const godkjenningListe = safeMap(godkjenninger, (godkjenning, index) => (
		<div key={`godkjenninger-${index}`} className="underinformasjon">
			<Normaltekst key={`godkjenninger-${index}`} className="underinformasjon">
				{godkjenning.tittel}
			</Normaltekst>
			<Normaltekst>Gjennomført dato: {formaterDato(godkjenning.gjennomfortDato, true)}</Normaltekst>
		</div>
	));

	return (
		<Informasjonsbolk header="Offentlige godkjenninger" headerTypo="ingress" {...rest}>
			{godkjenningListe}
		</Informasjonsbolk>
	);
}

export default Godkjenninger;
