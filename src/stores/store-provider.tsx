import React from 'react';
import { useAppStoreContext } from './app-store';
import { useFetchStoreContext } from './fetch-store';

interface StoreProviderProps {
    fnr: string;
    enhetId?: string;
    children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
    return (
        <useAppStoreContext.Provider fnr={props.fnr} enhetId={props.enhetId}>
            <useFetchStoreContext.Provider>
                {props.children}
            </useFetchStoreContext.Provider>
        </useAppStoreContext.Provider>
    );
};

export default StoreProvider;
