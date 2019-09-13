import React, { useContext } from 'react';

interface AppStore {
	fnr: string;
	enhetId?: string;
}

const initialStore = {
	fnr: ''
};

const appStoreContext = React.createContext<AppStore>(initialStore);

export const useAppStore = () => useContext(appStoreContext);

export default appStoreContext;
