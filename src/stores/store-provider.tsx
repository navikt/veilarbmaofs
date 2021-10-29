import React from 'react';
import { AppStoreProvider } from './app-store';
import { ViewStoreProvider } from './view-store';
import { Features } from '../rest/datatyper/feature';

interface StoreProviderProps {
	fnr: string;
	enhetId?: string;
	features: Features
	children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
	return (
		<AppStoreProvider fnr={props.fnr} enhetId={props.enhetId} features={props.features}>
			<ViewStoreProvider>
				{props.children}
			</ViewStoreProvider>
		</AppStoreProvider>
	);
};

export default StoreProvider;
