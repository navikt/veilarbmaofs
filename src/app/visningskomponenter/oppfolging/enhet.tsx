import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {EnhetType} from "./oppfolging";

interface OwnProps {
    navn: string
    enhet: EnhetType
}

function Enhet(props: OwnProps) {
    const {navn, enhet} = props;
    return (
        <Informasjonsbolk {...props}>
            <div>{navn}:</div>
            <div>{!!enhet.enhetId ? `${enhet.enhetId} ${enhet.navn}` : '-'}</div>
        </Informasjonsbolk>
    );
}

export default Enhet;