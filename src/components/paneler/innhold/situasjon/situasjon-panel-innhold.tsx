import React from 'react';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { SituasjonVisningHistorikk } from './situasjon-panel';

interface Props {
	situasjoner: SituasjonVisningHistorikk;
}

const SituasjonPanelInnhold = (props: Props) => {

	const {gjeldende, historikk} = props.situasjoner;

	return (
		<>
			<div>
				Sist endret: {gjeldende.dato}
				{gjeldende.situasjon}
			</div>
			<Informasjonsbolk header="Tidligere">
			<div> {historikk.map((situasjon, idx) =>
				<div key={idx}>{situasjon.dato}: {situasjon.situasjon}</div>)
			}
			</div>
			</Informasjonsbolk>
		</>
	);
};


export default SituasjonPanelInnhold;
