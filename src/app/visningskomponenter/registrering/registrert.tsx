import {Ingress} from "nav-frontend-typografi";
import * as React from "react";
import {RegistreringsData} from "../../datatyper/registreringsData";
import {isNullOrUndefined} from "../../utils/util";
import RegistrertTid from "./registrert-tid";




export function Header(props: Pick<RegistreringsData, 'opprettetDato'>) {
    if(isNullOrUndefined(props.opprettetDato)) {
        return(
            <Ingress>
                Brukeren har ikke registrert seg gjennom den nye registreringsløsningen.
            </Ingress>
        )
    }

    return(
        <>
            <Ingress> Brukerens svar fra registreringen </Ingress>
            <RegistrertTid opprettetDato={props.opprettetDato}/>
        </>
    );
}
