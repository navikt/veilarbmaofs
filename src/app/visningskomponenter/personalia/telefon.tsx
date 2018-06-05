import * as React from 'react';
import {CSSProperties} from "react";

const Telefon = (props: { telefon: string, style?: CSSProperties }) => (
    <div style={props.style}>
        <div>
            Telefon
        </div>
        <div>
            {props.telefon}
        </div>
    </div>
);

export default Telefon;