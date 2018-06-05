import * as React from 'react';
import { CSSProperties } from "react";
import { IPersonaliaSivilstand } from "./personalia";

const Sivilstand = (props: { sivilstand: IPersonaliaSivilstand, style?: CSSProperties }) => {
    const { sivilstand, fraDato } = props.sivilstand;

    const FraTidspunkt = () => {
        const component = (
            <div>
                Fra: {fraDato}
            </div>
        );
        return fraDato ? component : null;
    };

    return (
        <div style={props.style}>
            <div>
                Sivilstand
            </div>
            <div>
                {sivilstand}
            </div>
            <FraTidspunkt />
        </div>
    );
};

export default Sivilstand;