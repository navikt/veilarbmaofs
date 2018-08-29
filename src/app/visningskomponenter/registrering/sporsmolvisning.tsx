import {Normaltekst} from "nav-frontend-typografi";
import * as React from "react";
import {RegistreringsData, Sporsmal} from "../../datatyper/registreringsData";
import FloatGrid from "../../utils/float-grid";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {visEmdashHvisNull} from "../utils";


export function SporsmalsListe(props: Pick<RegistreringsData, "teksterForBesvarelse">) {
    const sporsmaal = props.teksterForBesvarelse;

    return (
        <FloatGrid columns={2} gap={8}>
            {sporsmaal.map(sporsmalvisning)}
        </FloatGrid>
    );
}

function sporsmalvisning(sporsmal: Sporsmal) {
    return (
        <Informasjonsbolk header={sporsmal.sporsmal} headerTypo="element" key={sporsmal.sporsmalId}>
            <Normaltekst className="underinformasjon">{visEmdashHvisNull(sporsmal.svar)}</Normaltekst>
        </Informasjonsbolk>
    )
}
