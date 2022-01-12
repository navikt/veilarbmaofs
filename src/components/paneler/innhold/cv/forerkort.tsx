import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeMap, visEmdashHvisNull } from '../../../../utils';
import { BodyShort } from '@navikt/ds-react';

type Props = Pick<ArenaPerson, 'forerkort'>;

function Forerkort(props: Props) {
	const { forerkort, ...rest } = props;
	const forerkortListe = safeMap(forerkort, (enkeltForerkort, index) => (
		<div key={`forerkort-${index}`} className="underinformasjon">
			<BodyShort key={`forerkort-${index}`} className="underinformasjon">
				Klasse: {visEmdashHvisNull(enkeltForerkort.klasse)}
			</BodyShort>
			<BodyShort>Fra: {formaterDato(enkeltForerkort.fraDato)}</BodyShort>
			<BodyShort>Utløper: {formaterDato(enkeltForerkort.utloperDato)}</BodyShort>
		</div>
	));

	return (
		<Informasjonsbolk header="Førerkort" headerTypo="ingress" {...rest}>
			{forerkortListe}
		</Informasjonsbolk>
	);
}

export default Forerkort;
