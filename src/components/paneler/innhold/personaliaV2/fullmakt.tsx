import { Fullmakter, VergeOgFullmaktData } from "../../../../rest/datatyper/vergeOgFullmakt";
import Informasjonsbolk from "../../../felles/informasjonsbolk";
import React from "react";
import {Normaltekst, UndertekstBold} from "nav-frontend-typografi";
import {formaterDato, isNotEmptyArray} from "../../../../utils";
import EMDASH from "../../../../utils/emdash";

function FullmaktigEllerFullmaktsgiver(props: {fullmakt: Fullmakter}) {
    const {motpartsPersonident, motpartsPersonNavn, motpartsRolle, omraader, gyldigFraOgMed, gyldigTilOgMed} = props.fullmakt;
    const {fornavn, mellomnavn, etternavn} = motpartsPersonNavn;

    const gjeldendeOmraader = omraader.map((omraade, index) => omraade.beskrivelse).join(', ');

    function hentBeskrivelseForGjeldendeOmraader(): string {
        if(omraader.length > 0) {
            if(omraader[0].kode === '*') {
                return 'alle ytelser'
            }
        }
        return gjeldendeOmraader;
    }

    return (
        <div>
            <div className="overinformasjon underinformasjon">
                <UndertekstBold>F{motpartsRolle?.substring(1).toLowerCase()}: {motpartsPersonident}</UndertekstBold>
                <Normaltekst>{`${fornavn} ${mellomnavn || ''} ${etternavn}`}</Normaltekst>
                <Normaltekst>Gjelder {hentBeskrivelseForGjeldendeOmraader}</Normaltekst>
                <Normaltekst>Gyldig fra og med: {formaterDato(gyldigFraOgMed)}</Normaltekst>
                <Normaltekst>Gyldig til og med: {formaterDato(gyldigTilOgMed)}</Normaltekst>
            </div>
        </div>
    );
}

function Fullmakt(props: Pick<VergeOgFullmaktData, 'fullmakt'>) {
    const { fullmakt, ...rest } = props;

    const fullmaktListe = isNotEmptyArray(fullmakt) ? fullmakt.map((fullmakt,index) => <FullmaktigEllerFullmaktsgiver fullmakt={fullmakt} key={index}/>) : EMDASH;

    return (
        <Informasjonsbolk header="Fullmakter" {...rest}>
            {fullmaktListe}
        </Informasjonsbolk>
    );
}

export default Fullmakt;
