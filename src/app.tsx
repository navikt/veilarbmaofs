import React from 'react';

import './app.less';
import { cache } from './utils/fetch-cache';
import StoreProvider from './stores/store-provider';
import AppProvider from './context';
import Persondetaljer from './components/persondetaljer';
import { Paneler } from './components/nye-paneler/paneler';

export interface AppProps {
    fnr: string;
    enhet?: string;
}

class App extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
        this.clearCache = this.clearCache.bind(this);
    }

    clearCache() {
        Object.keys(cache).forEach((key) => delete cache[key]);
    }

    public componentDidMount() {
        (window as any).frontendlogger.event('maofs.visning.v2', {}, {});
        (window as any).addEventListener('rerenderMao', this.clearCache);
    }

    public componentWillMount() {
        (window as any).removeEventListener('rerenderMao', this.clearCache);
    }

    public render() {
        return (
            <StoreProvider>
                <div className="veilarbmaofs">
                    <AppProvider>
                        <Paneler/>
                        <Persondetaljer {...this.props}/>
                    </AppProvider>
                </div>
            </StoreProvider>
        );
    }
}

export default App;
