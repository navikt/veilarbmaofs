import Normaltekst from "nav-frontend-typografi/lib/normaltekst";
import * as React from "react";
import {RegistreringsData} from "../../datatyper/registreringsData";
import {isNullOrUndefined} from "../../utils/util";
import {Header} from "./registrert";
import {SporsmalsListe} from "./sporsmolvisning";


interface Props {
    data: {
        registrering: RegistreringsData
    }
}

export function Registrering(props: Props) {
    const registrering = props.data.registrering;
    if(isNullOrUndefined(registrering)) {
        return (
            <Normaltekst>
                Brukeren har ikke registrert seg gjennom den nye registreringsløsningen.
            </Normaltekst>
        )
    }

    return (
        <>
            <Header opprettetDato={registrering.opprettetDato}/>
            <SporsmalsListe teksterForBesvarelse={registrering.teksterForBesvarelse}/>
        </>
    )
}
