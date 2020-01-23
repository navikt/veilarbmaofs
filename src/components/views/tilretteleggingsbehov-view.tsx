import React from 'react';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';

export const TilretteleggingsbehovView = () => {
	return <TilretteleggingsbehovSpa viewType={TilretteleggingsbehovViewType.REGISTRER_TILRETTELEGGINGSBEHOV} />;
};
