import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import {StringOrNull} from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

function Innsatsgruppe(props: {innsatsgruppe: StringOrNull}) {
    if (isNullOrUndefined(props.innsatsgruppe)) {
        return null;
    }

    return (
        <Informasjonsbolk {...props}>
            <div>Innsatsgruppe:</div>
            <div>{props.innsatsgruppe}</div>
        </Informasjonsbolk>
    );
}

export default Innsatsgruppe;