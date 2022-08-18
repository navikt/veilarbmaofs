import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { ArenaPerson, SprakNiva } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { safeMap } from '../../../../utils';
import { ReactComponent as Sprakikon } from './ikoner/sprak.svg';

// String er lagt til for bakoverkompatibilitet
function mapSprakNivaTilTekst(sprakNiva: SprakNiva | string): string {
	switch (sprakNiva) {
		case SprakNiva.FOERSTESPRAAK:
			return 'Førstespråk';
		case SprakNiva.VELDIG_GODT:
			return 'Veldig godt';
		case SprakNiva.GODT:
			return 'Godt';
		case SprakNiva.NYBEGYNNER:
			return 'Nybegynner';
		case SprakNiva.IKKE_OPPGITT:
			return 'Ikke oppgitt';
	}

	return sprakNiva;
}

function Sprak(props: Pick<ArenaPerson, 'sprak'>) {
	const { sprak: arenaSprak, ...rest } = props;

	const sprak = safeMap(arenaSprak, (enkeltSprak, index) => (
		<div key={`kompetanse-${index}`} className="underinformasjon">
			<Element>{enkeltSprak.sprak}</Element>
			<Normaltekst>Muntlig: {mapSprakNivaTilTekst(enkeltSprak.muntligNiva)}</Normaltekst>
			<Normaltekst>Skriftlig: {mapSprakNivaTilTekst(enkeltSprak.skriftligNiva)}</Normaltekst>
		</div>
	));

	return (
		<Informasjonsbolk header="Språk" headerTypo="ingress" icon={<Sprakikon />} {...rest}>
			{sprak}
		</Informasjonsbolk>
	);
}

export default Sprak;
