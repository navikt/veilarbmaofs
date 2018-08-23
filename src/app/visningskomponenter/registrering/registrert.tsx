import Normaltekst from "nav-frontend-typografi/lib/normaltekst";
import * as React from "react";
import {RegistreringsData} from "../../datatyper/registreringsData";
import RegistrertTid from "./registrert-tid";




export function Header(props: Pick<RegistreringsData, 'opprettetDato'>) {

    return(
        <>
            <Normaltekst> Her vises de spørsmål som bruker har svart på i registreringen. </Normaltekst>
            <RegistrertTid opprettetDato={props.opprettetDato}/>
        </>
    );
}
