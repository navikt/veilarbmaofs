import Normaltekst from "nav-frontend-typografi/lib/normaltekst";
import * as React from "react";
import {RegistreringsData} from "../../datatyper/registreringsData";
import {isNullOrUndefined} from "../../utils/util";
import RegistrertTid from "./registrert-tid";




export function Header(props: Pick<RegistreringsData, 'opprettetDato'>) {
    if(isNullOrUndefined(props.opprettetDato)) {
        return(
            <Normaltekst>
                Brukeren har ikke registrert seg gjennom den nye registreringsløsningen.
            </Normaltekst>
        )
    }

    return(
        <>
            <Normaltekst> Her vises de spørsmål som bruker har svart på i registreringen. </Normaltekst>
            <RegistrertTid opprettetDato={props.opprettetDato}/>
        </>
    );
}
