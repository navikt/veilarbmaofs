import {Ingress} from "nav-frontend-typografi";
import * as React from "react";
import {Registrering} from "../../datatyper/registreringsData";
import {isNullOrUndefined} from "../../utils/util";
import RegistrertTid from "./registrert-tid";

export function Header(props: {registrering?: Registrering}) {
    if(!props.registrering || isNullOrUndefined(props.registrering.opprettetDato)) {
        return(
            <Ingress>
                Brukeren har ikke registrert seg gjennom den nye registreringsløsningen.
            </Ingress>
        )
    }

    return(
        <>
            <Ingress> Brukerens svar fra registreringen </Ingress>
            <RegistrertTid opprettetDato={props.registrering.opprettetDato}/>
        </>
    );
}
