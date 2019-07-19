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

    function refetch() {
        console.log('refetching....'); // tslint:disable-line
    }

    useEffect(() => {
        logEvent('maofs.visning.v2');
        window.addEventListener('rerenderMao', refetch);
        return () => window.removeEventListener('rerenderMao', refetch);
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
