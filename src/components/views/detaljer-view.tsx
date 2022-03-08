import React from 'react';
import { TilToppenKnapp } from '../felles/til-toppen-knapp';
import { Paneler } from '../paneler/paneler';
import { Sidemeny } from '../sidemeny/sidemeny';
import TilbakemeldingFab from '../tilbakemelding/fab/tilbakemelding-fab';

export const DetaljerView: React.FC = () => {
	return (
		<article className="veilarbmaofs__container">
			<Sidemeny />
			<TilToppenKnapp />
			<Paneler />
			<TilbakemeldingFab />
		</article>
	);
};
