import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Yrkeserfaring(props: Pick<ICVInfo, 'yrkeserfaring'>){
    const erfaringer = props.yrkeserfaring.map((erfaring, index) => (
        <div key={`yrkeserfaring-${index}`} className="underinformasjon">
            <div className="typo-element">
                {erfaring.arbeidsgiver}
            </div>
            <div>{erfaring.styrkKodeStillingstittel}</div>
            <div>Fra: {new Date(erfaring.fraDato).toLocaleDateString()}</div>
            <div>Til: {new Date(erfaring.fraDato).toLocaleDateString()}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Yrkeserfaring" {...props}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default Yrkeserfaring;