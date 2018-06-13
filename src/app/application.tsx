import * as React from 'react';
import Persondetaljer from "./persondetaljer/persondetaljer";

import './application.less';
import AppProvider from "./context";

export interface IAppProps {
    fnr: string;
}

class Application extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="veilarbmaofs">
          <AppProvider>
              <Persondetaljer />
          </AppProvider>
      </div>
    );
  }
}

export default Application;
