import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Verv(props: Pick<ICVInfo, 'verv'>) {
    const vervliste = props.verv.map((verv, index) => (
        <div key={`verv-${index}`} className="underinformasjon">
            <div className="typo-element">
                {verv.organisasjon}
            </div>
            <div>{verv.tittel}</div>
            <div>Fra: {new Date(verv.fraDato).toLocaleDateString()}</div>
            <div>Til: {new Date(verv.fraDato).toLocaleDateString()}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Verv" {...props}>
            {vervliste}
        </Informasjonsbolk>
    );
}

export default Verv;