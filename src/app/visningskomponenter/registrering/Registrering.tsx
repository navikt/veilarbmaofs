import * as React from "react";
import {RegistreringsData} from "../../datatyper/registreringsData";
import {Header} from "./registrert";
import {SporsmalsListe} from "./sporsmolvisning";


interface Props {
    data: {
        registrering: RegistreringsData
    }
}

export function Registrering(props: Props) {
    const registrering = props.data.registrering;

    return (
        <>
            <Header opprettetDato={registrering.opprettetDato}/>
            <SporsmalsListe teksterForBesvarelse={registrering.teksterForBesvarelse}/>
        </>
    )
}
