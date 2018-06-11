import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

const Telefon = (props: { telefon: string }) => {
    if (isNullOrUndefined(props.telefon)) {
        return null;
    }

    return (
        <Informasjonsbolk {...props}>
            <div>
                Telefon
            </div>
            <div>
                {props.telefon}
            </div>
        </Informasjonsbolk>
    );
};

export default Telefon;