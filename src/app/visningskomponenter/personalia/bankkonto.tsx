import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

const Bankkonto = (props: { kontonummer: string }) => {
    if (isNullOrUndefined(props.kontonummer)) {
        return null;
    }

    return (
        <Informasjonsbolk {...props}>
            <div>
                Kontonummer
            </div>
            <div>
                {props.kontonummer}
            </div>
        </Informasjonsbolk>
    );
};

export default Bankkonto;