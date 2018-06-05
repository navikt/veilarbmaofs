import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";

const Bankkonto = (props: { kontonummer: string }) => (
    <Informasjonsbolk {...props}>
        <div>
            Kontonummer
        </div>
        <div>
            {props.kontonummer}
        </div>
    </Informasjonsbolk>
);

export default Bankkonto;