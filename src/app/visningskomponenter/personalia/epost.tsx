import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import { StringOrNull } from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

const Epost = (props: { epost: StringOrNull }) => {
    if (isNullOrUndefined(props.epost)) {
        return null;
    }

    return (
        <Informasjonsbolk {...props}>
            <div>
                Epost
            </div>
            <div>
                {props.epost}
            </div>
        </Informasjonsbolk>
    );
};

export default Epost;