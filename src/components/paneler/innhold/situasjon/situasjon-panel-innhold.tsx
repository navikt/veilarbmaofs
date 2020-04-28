import React from 'react';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { SituasjonVisningHistorikk } from './situasjon-panel';
import { formaterDato } from '../../../../utils';

interface Props {
	situasjoner: SituasjonVisningHistorikk;
}

const SituasjonPanelInnhold = (props: Props) => {

	const {gjeldende, historikk} = props.situasjoner;

	return (
		<>
			<div>
				Sist endret: {formaterDato(gjeldende.dato.toISOString())}
				{gjeldende.situasjon}
			</div>
			<Informasjonsbolk header="Tidligere">
			<div> {historikk.map((situasjon, idx) =>
				<div key={idx}>{formaterDato(situasjon.dato.toISOString())}: {situasjon.situasjon}</div>)
			}
			</div>
			</Informasjonsbolk>
		</>
	);
};


export default SituasjonPanelInnhold;
