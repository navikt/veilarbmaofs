import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../../utils';

type Props = Pick<ArenaPerson, 'andreGodkjenninger'>;

function AndreGodkjenninger(props: Props) {
	const { andreGodkjenninger, ...rest } = props;

	const annenGodkjenningListe = safeMap(andreGodkjenninger, (annengGodkjenning, index) => (
		<div key={`andregodkjenninger-${index}`} className="underinformasjon">
			<Normaltekst key={`andregodkjenninger-${index}`} className="underinformasjon">
				{annengGodkjenning.tittel}
			</Normaltekst>
			<Normaltekst>Gjennomført dato: {formaterDato(annengGodkjenning.gjennomfortDato, true)}</Normaltekst>
		</div>
	));

	return (
		<Informasjonsbolk header="Andre godkjenninger" headerTypo="ingress" {...rest}>
			{annenGodkjenningListe}
		</Informasjonsbolk>
	);
}

export default AndreGodkjenninger;
