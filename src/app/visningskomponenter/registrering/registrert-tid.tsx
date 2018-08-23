import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import {RegistreringsData} from "../../datatyper/registreringsData";
import {formaterDato} from "../utils";

function RegistrertTid(props:  Pick<RegistreringsData, 'opprettetDato'>) {
    const formattertTidspunkt = formaterDato(props.opprettetDato);

    return (
        <Normaltekst className="italic-gra">
            {`Registrert: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default RegistrertTid;
