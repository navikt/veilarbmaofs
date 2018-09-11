import * as React from 'react';
import Persondetaljer from "./persondetaljer";

import './application.less';
import AppProvider from "./context";

export interface AppProps {
    fnr: string;
    enhet?: string;
}

class Application extends React.Component<AppProps> {
    public componentDidMount(){
        (window as any).frontendlogger.event('maofs.visning', {}, {});
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
