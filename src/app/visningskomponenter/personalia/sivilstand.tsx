import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Dato from '../felles-komponenter/dato';
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import { IPersonaliaSivilstand } from "./personalia";

import { Normaltekst } from 'nav-frontend-typografi';

function Sivilstand(props: { sivilstand: IPersonaliaSivilstand }) {
    if (isNullOrUndefined(props.sivilstand)) {
        return null;
    }

    const { sivilstand, ...rest} = props;

    return (
        <Informasjonsbolk header="Sivilstand" {...rest}>
            <Normaltekst>
                {sivilstand.sivilstand}
            </Normaltekst>
            <Dato dato={sivilstand.fraDato}/>
        </Informasjonsbolk>
    );
}

export default Sivilstand;