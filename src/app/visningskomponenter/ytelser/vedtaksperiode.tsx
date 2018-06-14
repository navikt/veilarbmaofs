import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {YtelseData} from "./ytelser";

function Vedtaksperiode(props: Pick<YtelseData, "vedtaksperiode">) {
    const {fradato, tildato} = props.vedtaksperiode;
    
    if(isNullOrUndefined(props.vedtaksperiode)){
        return null;
    }

    return (
        <Informasjonsbolk {...props}>
            <div>Vedtaksperiode:</div>
            <div>Fra: {new Date(fradato).toLocaleDateString()}</div>
            <div>Til: {new Date(tildato).toLocaleDateString()}</div>
        </Informasjonsbolk>
    );
}

export default Vedtaksperiode;