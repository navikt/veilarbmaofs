import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import {StringOrNull} from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

function Vedtak (props: {vedtak: StringOrNull}) {
    if(isNullOrUndefined(props.vedtak)){
        return null;
    }
    return (
        <Informasjonsbolk {...props}>
            <div>Vedtak:</div>
            <div>{props.vedtak}</div>
        </Informasjonsbolk>
    );
}

export default Vedtak;