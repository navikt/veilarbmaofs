import React from 'react';
import { sidemenyElementer } from '../utils/sidemeny';
import { AppStoreProvider } from './app-store';
import { ViewStoreProvider } from './view-store';

interface StoreProviderProps {
	fnr: string;
	enhetId?: string;
	children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
	return (
		<AppStoreProvider fnr={props.fnr} enhetId={props.enhetId} sidemenyElementer={sidemenyElementer}>
			<ViewStoreProvider>{props.children}</ViewStoreProvider>
		</AppStoreProvider>
	);
};

export default StoreProvider;
