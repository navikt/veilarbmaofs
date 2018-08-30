import {Element, Ingress, Normaltekst} from "nav-frontend-typografi";
import * as React from "react";
import {Profilering} from "../../datatyper/registreringsData";

interface Props {
    profilering?: Profilering;
}

export function Profilering(props: Props) {
    if(!props.profilering) {
        return null;
    }

    return(
        <>
            <Ingress>Hentet fra Aa-registret</Ingress>
            <Element> Brukeren har vært sammenhengende i jobb minst 6 av de siste 12 måneder </Element>
            <Normaltekst>{props.profilering.jobbetSammenhengendeSeksAvTolvSisteManeder ? "Ja" : "Nei"} </Normaltekst>
        </>

    )
}
