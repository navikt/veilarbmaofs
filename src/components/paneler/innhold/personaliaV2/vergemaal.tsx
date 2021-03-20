import React from 'react';
import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi/lib';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {
    VergeOgFullmaktData,
    VergeEllerFullmektig,
    VergemaalEllerFremtidsfullmakt, VergeNavn
} from '../../../../rest/datatyper/vergeOgFullmakt';
import { formaterDato, isNotEmptyArray } from "../../../../utils";
import EMDASH from "../../../../utils/emdash";

function Navn(props: {vergeNavn: VergeNavn}) {
    const {fornavn, mellomnavn, etternavn} = props.vergeNavn;

    return (
        <div>
            <Normaltekst>{`${fornavn} ${mellomnavn || ''} ${etternavn}`}</Normaltekst>
        </div>
    );
}

function VergeEllerFullmakt(props: {vergeEllerFullmektig: VergeEllerFullmektig}) {
    const {navn, motpartsPersonident, omfang} = props.vergeEllerFullmektig;

    return (
        <div>
            <div>
                <UndertekstBold className="overinformasjon">Verge</UndertekstBold>
                <Navn vergeNavn={navn}/>
                <Normaltekst>{motpartsPersonident}</Normaltekst>
            </div>
            <div>
                <UndertekstBold className="overinformasjon">Omfang</UndertekstBold>
                <Normaltekst>{omfang}</Normaltekst>
            </div>
        </div>
    )
}

function Verge(props: {vergemaal: VergemaalEllerFremtidsfullmakt}) {
    const {type, embete, vergeEllerFullmektig, folkeregistermetadata} = props.vergemaal;
    const {gyldighetstidspunkt} = folkeregistermetadata;

    return (
        <div className="underinformasjon">
            <Normaltekst className="overinformasjon">{type}</Normaltekst>
            <VergeEllerFullmakt vergeEllerFullmektig={vergeEllerFullmektig}/>
            <UndertekstBold className="overinformasjon">Fylkesmannsembete</UndertekstBold>
            <Normaltekst>{embete}</Normaltekst>
            <Normaltekst>- {formaterDato(gyldighetstidspunkt)}</Normaltekst>
        </div>
    );
}

function Vergemaal(props: Pick<VergeOgFullmaktData, 'vergeEllerFremtidsfullmakt'>) {
    const { vergeEllerFremtidsfullmakt, ...rest } = props;

    const vergemaalListe = isNotEmptyArray(vergeEllerFremtidsfullmakt)
                                ? vergeEllerFremtidsfullmakt.map((vergemaal,index) => <Verge vergemaal={vergemaal} key={index}/>)
                                : EMDASH;

    return (
        <Informasjonsbolk header="Bruker er under vergemål" {...rest}>
            {vergemaalListe}
        </Informasjonsbolk>

    );
}

export default Vergemaal;
