import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../../utils';
import { ReactComponent as Offentligikon } from './ikoner/offentlige-godkjenninger.svg';
import { BodyShort, Label } from '@navikt/ds-react';
import EMDASH from '../../../../utils/emdash';

type Props = Pick<ArenaPerson, 'godkjenninger'>;

function Godkjenninger(props: Props) {
	const { godkjenninger, ...rest } = props;

	const godkjenningListe = safeMap(godkjenninger, (godkjenning, index) => (
		<div key={`godkjenninger-${index}`} className="underinformasjon">
			<Label key={`godkjenninger-${index}`}>{godkjenning.tittel}</Label>

			<BodyShort>Utsteder: {godkjenning.utsteder ? godkjenning.utsteder : EMDASH}</BodyShort>
			<BodyShort>Fullført: {formaterDato(godkjenning.gjennomfortDato)}</BodyShort>
			<BodyShort>Utløper: {godkjenning.utloperDato ? formaterDato(godkjenning.utloperDato) : EMDASH}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Offentlige godkjenninger" headerTypo="ingress" icon={<Offentligikon />} {...rest}>
			{godkjenningListe}
		</Informasjonsbolk>
	);
}

export default Godkjenninger;
