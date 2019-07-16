import React, { useEffect } from 'react';
import StoreProvider from './stores/store-provider';
import AppProvider from './context';
import Persondetaljer from './components/persondetaljer';
import { Paneler } from './components/nye-paneler/paneler';
import { logEvent } from './utils/frontend-logger';
import './app.less';

export interface AppProps {
    fnr: string;
    enhet?: string;
}

const App = (props: AppProps) => {

    function clearCache() {
        // TODO: Clear fetch-store
        // Object.keys(cache).forEach((key) => delete cache[key]);
    }

    useEffect(() => {
        logEvent('maofs.visning.v2');
        window.addEventListener('rerenderMao', clearCache);
        return () => window.removeEventListener('rerenderMao', clearCache);
    }, []);

    return (
        <StoreProvider fnr={props.fnr} enhetId={props.enhet}>
            <div className="veilarbmaofs">
                <AppProvider>
                    <Paneler/>
                    <Persondetaljer {...props}/>
                </AppProvider>
            </div>
        </StoreProvider>
    );
};

export default App;
