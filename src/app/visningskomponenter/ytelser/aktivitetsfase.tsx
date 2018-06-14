import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import {StringOrNull} from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

function Aktivitetsfase(props: {aktivitetsfase:StringOrNull}) {
    if(isNullOrUndefined(props.aktivitetsfase)){
        return null;
    }
    return (
        <Informasjonsbolk {...props}>
            <div>Aktivitetsfase:</div>
            <div>{props.aktivitetsfase}</div>
        </Informasjonsbolk>
    )
}

export default Aktivitetsfase;