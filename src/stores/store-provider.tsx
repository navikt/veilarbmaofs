import React from 'react';
import { useAppStoreContext } from './app-store';
import { useFetchStoreContext } from './fetch-store';

interface StoreProviderProps {
    children: React.ReactNode;
}

const StoreProvider = (props: StoreProviderProps) => {
    return (
        <useAppStoreContext.Provider>
            <useFetchStoreContext.Provider>
                {props.children}
            </useFetchStoreContext.Provider>
        </useAppStoreContext.Provider>
    );
};

export default StoreProvider;
