import * as React from 'react';
import { StringOrNull } from "../felles-typer";
import Informasjonsbolk from "../informasjonsbolk";

const Epost = (props: { epost: StringOrNull }) => {

    return !props.epost ? null :
        <Informasjonsbolk {...props}>
            <div>
                Epost
            </div>
            <div>
                {props.epost}
            </div>
        </Informasjonsbolk>
};

export default Epost;