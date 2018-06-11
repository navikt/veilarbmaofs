import * as React from 'react';
import Persondetaljer from "./persondetaljer/persondetaljer";

import './application.less';
import AppProvider from "./context";

class Application extends React.Component {
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
