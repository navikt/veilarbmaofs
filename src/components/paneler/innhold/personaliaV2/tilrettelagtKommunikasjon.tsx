import {
    TilrettelagtKommunikasjonData
} from "../../../../rest/datatyper/tilrettelagtKommunikasjon";
import Informasjonsbolk from "../../../felles/informasjonsbolk";
import { Normaltekst } from "nav-frontend-typografi";
import React from "react";
import {isNullOrUndefined} from "../../../../utils";

function TilrettelagtKommunikasjon(props: {tilrettelagtKommunikasjon: TilrettelagtKommunikasjonData}) {
    if (isNullOrUndefined(props.tilrettelagtKommunikasjon)) {
        return null;
    }

    const { tilrettelagtKommunikasjon, ...rest } = props;
    const { talespraak, tegnspraak } = tilrettelagtKommunikasjon;

    return(
        <Informasjonsbolk header="Tilrettelagt kommunikasjon" {...rest}>
            <div className="overinformasjon">
                {talespraak && <Normaltekst>Talespråktolk: {talespraak}</Normaltekst>}
                {tegnspraak && <Normaltekst> Tegnspråktolk: {tegnspraak}</Normaltekst>}
            </div>
        </Informasjonsbolk>
    );
}

export default TilrettelagtKommunikasjon;
