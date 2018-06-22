import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {YtelseDataType} from "./ytelsevisning";

function Innsatsgruppe(props: Pick<YtelseDataType, 'oppfolgingskontrakter'>) {
    if (isNullOrUndefined(props.oppfolgingskontrakter)) {
        return null;
    }

    const innsats = props.oppfolgingskontrakter.map((oppfolgingskontrakt, index) => (
        <div key={`innsats-${index}`}>
            <Informasjonsbolk {...props}>
                <div>Innsatsgruppe:</div>
                {
                    oppfolgingskontrakt.innsatsgrupper.map((innsatsgruppe) => (
                        <div>{oppfolgingskontrakt.innsatsgrupper}</div>
                    ))
                }
            </Informasjonsbolk>
        </div>
    ));

    return (
        <Informasjonsbolk {...props}>
            <div>{innsats}</div>
        </Informasjonsbolk>
    );
}

export default Innsatsgruppe;