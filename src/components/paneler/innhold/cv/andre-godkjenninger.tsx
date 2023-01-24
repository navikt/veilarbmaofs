import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../../utils';
import { ReactComponent as Andreikon } from './ikoner/andre-godkjenninger.svg';
import { BodyShort, Label } from '@navikt/ds-react';
import EMDASH from '../../../../utils/emdash';

type Props = Pick<ArenaPerson, 'andreGodkjenninger'>;

function AndreGodkjenninger(props: Props) {
	const { andreGodkjenninger, ...rest } = props;

	const annenGodkjenningListe = safeMap(andreGodkjenninger, (annenGodkjenning, index) => (
		<div key={`andregodkjenninger-${index}`} className="underinformasjon">
			<Label size="small" as="p" key={`andregodkjenninger-${index}`}>
				{annenGodkjenning.tittel}
			</Label>

			<BodyShort>Utsteder: {annenGodkjenning.utsteder ? annenGodkjenning.utsteder : EMDASH}</BodyShort>
			<BodyShort>Fullført: {formaterDato(annenGodkjenning.gjennomfortDato)}</BodyShort>
			{annenGodkjenning.utloperDato && (
				<BodyShort>
					Utløper: {annenGodkjenning.utloperDato ? formaterDato(annenGodkjenning.utloperDato) : EMDASH}
				</BodyShort>
			)}
		</div>
	));

	return (
		<Informasjonsbolk header="Andre godkjenninger" headerTypo="ingress" icon={<Andreikon />} {...rest}>
			{annenGodkjenningListe}
		</Informasjonsbolk>
	);
}

export default AndreGodkjenninger;
