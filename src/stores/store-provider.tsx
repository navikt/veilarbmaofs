import React from 'react';
import appStoreContext from './app-store';

interface StoreProviderProps {
	fnr: string;
	enhetId?: string;
	children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
	return (
		<appStoreContext.Provider value={{ fnr: props.fnr, enhetId: props.enhetId }}>
			{props.children}
		</appStoreContext.Provider>
	);
};

export default StoreProvider;
