import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

export const SynlighetForArbeidsgiver = (props: { erSynlig: boolean }) => {
	return (
		<div className="blokk-xxs">
			<Normaltekst tag="span">
				Synlig for arbeidsgiver:&nbsp;&nbsp;
			</Normaltekst>
			<Element tag="span">
				{props.erSynlig ? 'Ja' : 'Nei'}
			</Element>
		</div>
	);
};
