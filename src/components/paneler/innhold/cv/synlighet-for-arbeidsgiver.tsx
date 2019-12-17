import React from 'react';
import cls from 'classnames';
import { Element, Ingress } from 'nav-frontend-typografi';

export const SynlighetForArbeidsgiver = ({ erSynlig }: { erSynlig: boolean }) => {
	return (
		<div className={cls({ 'blokk-s': erSynlig, 'blokk-xxs': !erSynlig })}>
			<Ingress className="synlig-for-arbeidsgiver" tag="span">
				Synlig for arbeidsgiver:&nbsp;&nbsp;
			</Ingress>
			<Element tag="span">{erSynlig ? 'Ja' : 'Nei'}</Element>
		</div>
	);
};
