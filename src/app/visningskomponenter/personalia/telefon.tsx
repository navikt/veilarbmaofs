import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";

const Telefon = (props: { telefon: string }) => (
    <Informasjonsbolk {...props}>
        <div>
            Telefon
        </div>
        <div>
            {props.telefon}
        </div>
    </Informasjonsbolk>
);

export default Telefon;