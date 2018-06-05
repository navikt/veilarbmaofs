import * as React from 'react';
import {CSSProperties} from "react";
import { StringOrNull } from "../felles-typer";

const Epost = (props: { epost: StringOrNull, style?: CSSProperties }) => {

    return !props.epost ? null :
        <div style={props.style}>
            <div>
                Epost
            </div>
            <div>
                {props.epost}
            </div>
        </div>
};

export default Epost;