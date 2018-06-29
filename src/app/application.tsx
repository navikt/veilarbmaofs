import * as React from 'react';
import Persondetaljer from "./persondetaljer";

import './application.less';
import AppProvider from "./context";

export interface AppProps {
    fnr: string;
}

class Application extends React.Component<AppProps> {
  public render() {
    return (
      <div className="veilarbmaofs">
          <AppProvider>
              <Persondetaljer fnr={this.props.fnr}/>
          </AppProvider>
      </div>
    );
  }
}

export default Application;
