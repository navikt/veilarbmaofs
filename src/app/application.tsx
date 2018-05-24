import * as React from 'react';
import Innholdslaster from "../components/innholdslaster";
import Persondetaljer from "./persondetaljer/persondetaljer";

import './application.less';

class Application extends React.Component {
  public render() {
    return (
      <div className="veilarbmaofs">
          <Innholdslaster avhengigheter={[]} > {/** tekster */}
              <p>TESTING 1337</p>
              <Persondetaljer />
          </Innholdslaster>
      </div>
    );
  }
}

export default Application;
