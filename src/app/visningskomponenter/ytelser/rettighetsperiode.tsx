import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import {StringOrNull} from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

function Rettighetsperiode(props:{rettighetsperiode:StringOrNull}) {
    if(isNullOrUndefined(props.rettighetsperiode)){
        return null;
    }
    return (
        <Informasjonsbolk {...props}>
            <div>Rettighetsperiode:</div>
            <div>{props.rettighetsperiode}</div>
        </Informasjonsbolk>
    );
}

export default Rettighetsperiode;