import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { safeMap, visEmdashHvisNull } from '../../../../utils';
import { ReactComponent as Forerkortikon } from './ikoner/forerkort.svg';

type Props = Pick<ArenaPerson, 'forerkort'>;

function Forerkort(props: Props) {
	const { forerkort, ...rest } = props;
	const forerkortListe = safeMap(forerkort, (enkeltForerkort, index) => (
		<Normaltekst key={`forerkort-${index}`}>Klasse {visEmdashHvisNull(enkeltForerkort.klasse)}</Normaltekst>
	));

	return (
		<Informasjonsbolk header="Førerkort" headerTypo="ingress" icon={<Forerkortikon />} {...rest}>
			{forerkortListe}
		</Informasjonsbolk>
	);
}

export default Forerkort;
