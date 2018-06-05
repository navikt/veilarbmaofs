import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";

const Statsborgerskap = (props: { statsborgerskap: string }) => (
    <Informasjonsbolk {...props}>
        <div>
            Statsborgerskap
        </div>
        <div>
            {props.statsborgerskap}
        </div>
    </Informasjonsbolk>
);

export default Statsborgerskap;