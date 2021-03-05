import { Fullmakter, PersonaliaV2Info } from "../../../../rest/datatyper/personaliav2";
import Informasjonsbolk from "../../../felles/informasjonsbolk";
import React from "react";
import {Normaltekst, UndertekstBold} from "nav-frontend-typografi";
import {formaterDato, isNotEmptyArray} from "../../../../utils";
import EMDASH from "../../../../utils/emdash";

function FullmaktigEllerFullmaktsgiver(props: {fullmakt: Fullmakter}) {
    const {motpartsPersonident, motpartsRolle, omraader, gyldigFraOgMed, gyldigTilOgMed} = props.fullmakt;

    return (
        <div>
            <div className="overinformasjon underinformasjon">
                <UndertekstBold>F{motpartsRolle?.substring(1).toLowerCase()}: {motpartsPersonident}</UndertekstBold>
                <Normaltekst>Gjelder {omraader.join()}</Normaltekst>
                <Normaltekst>Gyldig fra og med: {formaterDato(gyldigFraOgMed)}</Normaltekst>
                <Normaltekst>Gyldig til og med: {formaterDato(gyldigTilOgMed)}</Normaltekst>
            </div>
        </div>
    );
}

function Fullmakt(props: Pick<PersonaliaV2Info, 'fullmakt'>) {
    const { fullmakt, ...rest } = props;

    const fullmaktListe = isNotEmptyArray(fullmakt) ? fullmakt.map((fullmakt,index) => <FullmaktigEllerFullmaktsgiver fullmakt={fullmakt} key={index}/>) : EMDASH;

    return (
        <Informasjonsbolk header="Fullmakter" {...rest}>
            {fullmaktListe}
        </Informasjonsbolk>
    );
}

export default Fullmakt;
