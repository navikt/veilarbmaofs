import * as React from 'react';
import Innholdslaster from "../components/innholdslaster";
import Persondetaljer from "./persondetaljer/persondetaljer";

import './application.less';
import AppProvider from "./context";

class Application extends React.Component {
  public render() {
    return (
      <div className="veilarbmaofs">
          <AppProvider>
              <Innholdslaster avhengigheter={[]} > {/** tekster */}
                  <Persondetaljer />
              </Innholdslaster>
          </AppProvider>
      </div>
    );
  }
}

export default Application;
