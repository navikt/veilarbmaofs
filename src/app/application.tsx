import * as React from 'react';
import Persondetaljer from './persondetaljer';

import './application.less';
import AppProvider from './context';
import ModalWrapper from 'nav-frontend-modal';
import { cache } from '../fetch-cache';

ModalWrapper.setAppElement(document.getElementById('modal-a11y-wrapper'));

export interface AppProps {
    fnr: string;
    enhet?: string;
}

class Application extends React.Component<AppProps> {
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

export default Application;
