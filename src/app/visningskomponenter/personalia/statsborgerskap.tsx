import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

const Statsborgerskap = (props: { statsborgerskap: string }) => {
    if (isNullOrUndefined(props.statsborgerskap)) {
        return null;
    }

    return (
        <Informasjonsbolk {...props}>
            <div>
                Statsborgerskap
            </div>
            <div>
                {props.statsborgerskap}
            </div>
        </Informasjonsbolk>
    );
};

export default Statsborgerskap;