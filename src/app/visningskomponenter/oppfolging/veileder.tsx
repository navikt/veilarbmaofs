import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {OppfolgingData} from "./oppfolging";

function Veileder(props: Pick<OppfolgingData, 'veilederId'>) {
    return (
        <Informasjonsbolk {...props}>
            <div>Veileder:</div>
            <div>{!!props.veilederId ? props.veilederId : '-'}</div>
        </Informasjonsbolk>
    );
}

export default Veileder;