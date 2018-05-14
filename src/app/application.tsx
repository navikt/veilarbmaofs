import * as React from 'react';
import Innholdslaster from "../components/innholdslaster";

class Application extends React.Component {
  public render() {
    return (
      <div className="veilarbmaofs">
          <Innholdslaster avhengigheter={[]} >
            <p>Data</p>
          </Innholdslaster>
      </div>
    );
  }
}

export default Application;
