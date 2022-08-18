import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, formaterVarighet, safeSort, safeMap } from '../../../../utils';
import { ReactComponent as Kursikon } from './ikoner/kurs.svg';

function Kurs(props: Pick<ArenaPerson, 'kurs'>) {
	const { kurs: arenaKurs, ...rest } = props;
	const sortedKurs = arenaKurs.sort((a, b) => safeSort(b.tidspunkt, a.tidspunkt));
	const kurs = safeMap(sortedKurs, (enkeltKurs, index) => (
		<div key={`kurs-${index}`} className="underinformasjon">
			<Element>{enkeltKurs.tittel}</Element>
			<Normaltekst>{enkeltKurs.arrangor}</Normaltekst>
			{enkeltKurs.tidspunkt && <Normaltekst>Fullført: {formaterDato(enkeltKurs.tidspunkt)}</Normaltekst>}
			{enkeltKurs.varighet && <Normaltekst>Varighet: {formaterVarighet(enkeltKurs.varighet)}</Normaltekst>}
		</div>
	));

	return (
		<Informasjonsbolk header="Kurs" headerTypo="ingress" icon={<Kursikon />} {...rest}>
			{kurs}
		</Informasjonsbolk>
	);
}

export default Kurs;
