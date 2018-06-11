import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import { IPersonaliaSivilstand } from "./personalia";

const Sivilstand = (props: { sivilstand: IPersonaliaSivilstand }) => {
    if (isNullOrUndefined(props.sivilstand)) {
        return null;
    }

    const { sivilstand, fraDato } = props.sivilstand;

    const FraTidspunkt = () => {
        const component = (
            <div>
                Fra: {new Date(fraDato!).toLocaleDateString()}
            </div>
        );
        return fraDato ? component : null;
    };

    return (
        <Informasjonsbolk {...props}>
            <div>
                Sivilstand
            </div>
            <div>
                {sivilstand}
            </div>
            <FraTidspunkt />
        </Informasjonsbolk>
    );
};

export default Sivilstand;