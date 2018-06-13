import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

interface OwnProps {
    innsatsgruppe: string
}

function Innsatsgruppe(props: OwnProps) {
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