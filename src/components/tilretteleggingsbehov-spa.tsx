import React from 'react';
import { AsyncNAVSPA } from '../utils/async-navspa';
import { useAppStore } from '../stores/app-store';
import { TILRETTELEGGINGSBEHOV_APPLICATION_NAME, TILRETTELEGGINGSBEHOV_APPLICATION_URL } from '../utils/konstanter';

interface TilretteleggingsbehovViewSpaProps {
	fnr: string;
	viewType: TilretteleggingsbehovViewType;
}

export enum TilretteleggingsbehovViewType {
	PAGE = 'PAGE',
	PANEL = 'PANEL'
}

export const TilretteleggingsbehovSpa= (props: { viewType: TilretteleggingsbehovViewType }) => {
	const { fnr } = useAppStore();
	return (
		<AsyncNAVSPA<TilretteleggingsbehovViewSpaProps>
			spaProps={{
				fnr,
				viewType: props.viewType
			}}
			applicationName={TILRETTELEGGINGSBEHOV_APPLICATION_NAME}
			applicationBaseUrl={TILRETTELEGGINGSBEHOV_APPLICATION_URL}
		/>
	);
};
