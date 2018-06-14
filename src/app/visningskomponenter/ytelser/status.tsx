import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import {StringOrNull} from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

function Status(props: {status: StringOrNull}) {
    if(isNullOrUndefined(props.status)){
        return null;
    }
    return(
        <Informasjonsbolk {...props}>
            <div>Status:</div>
            <div>{props.status}</div>
        </Informasjonsbolk>
    );
}

export default Status;