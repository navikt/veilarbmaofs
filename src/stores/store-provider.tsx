import React from 'react';
import { useAppStore } from './app-store';
import { useViewStore } from './view-store';

interface StoreProviderProps {
	fnr: string;
	enhetId?: string;
	children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
	return (
		<useAppStore.Provider fnr={props.fnr} enhetId={props.enhetId}>
			<useViewStore.Provider>
				{props.children}
			</useViewStore.Provider>
		</useAppStore.Provider>
	);
};

export default StoreProvider;
