import * as React from 'react';
import {CSSProperties} from "react";

const Bankkonto = (props: { kontonummer: string, style?: CSSProperties }) => (
    <div style={props.style}>
        <div>
            Kontonummer
        </div>
        <div>
            {props.kontonummer}
        </div>
    </div>
);

export default Bankkonto;