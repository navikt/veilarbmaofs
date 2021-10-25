import React from 'react';
import { AsyncNavspa, AsyncSpaConfig } from '@navikt/navspa';
import { Laster } from './felles/fetch';

export enum TilretteleggingsbehovViewType {
	VIS_TILRETTELEGGINGSBEHOV = 'VIS_TILRETTELEGGINGSBEHOV',
	REGISTRER_TILRETTELEGGINGSBEHOV = 'REGISTRER_TILRETTELEGGINGSBEHOV'
}

interface TilretteleggingsbehovViewSpaProps {
	fnr: string;
	viewType: TilretteleggingsbehovViewType;
}

export const tilretteleggingsbehovSpaConfig: AsyncSpaConfig = {
	appName: 'tilretteleggingsbehov',
	appBaseUrl: '/registrer-tilretteleggingsbehov',
	loader: <Laster midtstilt={true} />
};

export const TilretteleggingsbehovSpa = AsyncNavspa.importer<TilretteleggingsbehovViewSpaProps>(
	tilretteleggingsbehovSpaConfig
);
