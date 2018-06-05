import * as React from 'react';
import {CSSProperties} from "react";

const Statsborgerskap = (props: { statsborgerskap: string, style?: CSSProperties }) => (
    <div style={props.style}>
        <div>
            Statsborgerskap
        </div>
        <div>
            {props.statsborgerskap}
        </div>
    </div>
);

export default Statsborgerskap;