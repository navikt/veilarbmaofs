import * as React from 'react';
import Persondetaljer from './components/persondetaljer';

import './app.less';
import AppProvider from './context';
import { cache } from './utils/fetch-cache';

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
            <div className="veilarbmaofs">
                <AppProvider>
                    <Persondetaljer {...this.props}/>
                </AppProvider>
            </div>
        );
    }
}

export default App;
