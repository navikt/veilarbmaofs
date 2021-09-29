import {
    TilrettelagtKommunikasjonData
} from "../../../../rest/datatyper/tilrettelagtKommunikasjon";
import Informasjonsbolk from "../../../felles/informasjonsbolk";
import { Normaltekst } from "nav-frontend-typografi";
import React from "react";
import {isNullOrUndefined} from "../../../../utils";

function TilrettelagtKommunikasjon(props: {tilrettelagtKommunikasjon: TilrettelagtKommunikasjonData}) {
    const { tilrettelagtKommunikasjon, ...rest } = props;
    const { talespraak, tegnspraak } = tilrettelagtKommunikasjon;

    if (isNullOrUndefined(talespraak) && isNullOrUndefined(tegnspraak)) {
        return null;
    }

    return(
        <Informasjonsbolk header="Tilrettelagt kommunikasjon" {...rest}>
            <div className="overinformasjon">
                {talespraak && <Normaltekst>Språktolk: {talespraak}</Normaltekst>}
                {tegnspraak && <Normaltekst>Tegnspråktolk</Normaltekst>}
            </div>
        </Informasjonsbolk>
    );
}

export default TilrettelagtKommunikasjon;
