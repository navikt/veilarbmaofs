import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

function Yrkeserfaring(props: Pick<ArenaPerson, 'yrkeserfaring'>){
    if (isNullOrUndefined(props.yrkeserfaring)) {
        return null;
    }

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