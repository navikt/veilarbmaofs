import React from 'react';
import cls from 'classnames';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';

interface TilretteleggingsbehovViewProps {
	hidden?: boolean;
}

export const TilretteleggingsbehovView = (props: TilretteleggingsbehovViewProps) => {
	return (
		<div className={cls({'veilarbmaofs--hidden': props.hidden})}>
			<TilretteleggingsbehovSpa viewType={TilretteleggingsbehovViewType.REGISTRER_TILRETTELEGGINGSBEHOV} />
		</div>
	);
};
