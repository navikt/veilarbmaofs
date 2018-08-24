import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import {RegistreringsData} from "../../datatyper/registreringsData";
import {isNullOrUndefined} from "../../utils/util";
import {formaterDato} from "../utils";

function RegistrertTid(props:  Pick<RegistreringsData, 'opprettetDato'>) {
    if(isNullOrUndefined(props.opprettetDato)){
        return null;
    }

    const formattertTidspunkt = formaterDato(props.opprettetDato!);

    return (
        <Normaltekst className="italic-gra">
            {`Registrert: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default RegistrertTid;
