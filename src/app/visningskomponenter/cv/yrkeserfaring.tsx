import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Yrkeserfaring(props: Pick<ICVInfo, 'yrkeserfaring'>){
    const erfaringer = props.yrkeserfaring.map((erfaring, index) => (
        <div key={`yrkeserfaring-${index}`} className="informasjonsbolk">
            <div className="typo-element">
                {erfaring.arbeidsgiver}
            </div>
            <div>{erfaring.styrkKodeStillingstittel}</div>
            <div>Fra: {erfaring.fraDato}</div>
            <div>Til: {erfaring.fraDato}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Yrkeserfaring" {...props}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default Yrkeserfaring;