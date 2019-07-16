import React, { useEffect } from 'react';
import StoreProvider from './stores/store-provider';
import { Paneler } from './components/paneler/paneler';
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
                <Paneler/>
            </div>
        </StoreProvider>
    );
};

export default App;
