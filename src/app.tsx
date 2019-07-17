import React, { useEffect } from 'react';
import StoreProvider from './stores/store-provider';
import { Paneler } from './components/paneler/paneler';
import { logEvent } from './utils/frontend-logger';
import { useFetchStoreContext } from './stores/fetch-store';
import './app.less';

export interface AppProps {
    fnr: string;
    enhet?: string;
}

const App = (props: AppProps) => {
    const fetchStore = useFetchStoreContext();

    function clearCache() {
        Object.entries(fetchStore).forEach((fetch: any) => fetch.reset());
    }

    useEffect(() => {
        logEvent('maofs.visning.v2');
        window.addEventListener('rerenderMao', clearCache);
        return () => window.removeEventListener('rerenderMao', clearCache);
    }, []);

    return (
        <StoreProvider fnr={props.fnr} enhetId={props.enhet}>
            <div className="veilarbmaofs">
                <Paneler/>
            </div>
        </StoreProvider>
    );
};

export default App;
