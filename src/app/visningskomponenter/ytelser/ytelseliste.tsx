import * as React from 'react';
import {YtelseDataType} from "../../datatyper/ytelse";
import EMDASH from "../../utils/emdash.js";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

function Ytelseliste(props: Pick<YtelseDataType, 'ytelser'>) {
    if(isNullOrUndefined(props.ytelser)){
        return null;
    }

    const ytelser = props.ytelser.map((ytelse, index)=> (
        <div key={`ytelse-${index}`}>
                <div>{EMDASH}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Pågående ytelser" {...props}>
            <div>Rettighetsperiode</div>
            <div>{ytelser}</div>
        </Informasjonsbolk>
    );
}

export default Ytelseliste;