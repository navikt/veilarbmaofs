import React from 'react';
import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi/lib';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {
    Vergetype,
    VergeNavn,
    VergeOgFullmaktData,
    VergeEllerFullmektig,
    VergemaalEllerFremtidsfullmakt,
    VergemaalEllerFullmaktOmfangType
} from '../../../../rest/datatyper/vergeOgFullmakt';
import {formateLocalDate, isNotEmptyArray} from "../../../../utils";
import EMDASH from "../../../../utils/emdash";

function vergetypeBeskrivelse(vergeType: Vergetype) {
    switch(vergeType) {
        case Vergetype.VOKSEN:
            return 'Voksen';
        case Vergetype.MINDREAARIG:
            return 'Mindreårig (unntatt EMF)';
        case Vergetype.MIDLERTIDIG_FOR_VOKSEN:
            return 'Voksen midlertidig';
        case Vergetype.MIDLERTIDIG_FOR_MINDREAARIG:
            return 'Mindreårig midlertidig (unntatt EMF)';
        case Vergetype.STADFESTET_FREMTIDSFULLMAKT:
            return 'Fremtidsfullmakt';
        case Vergetype.ENSLIG_MINDREAARIG_ASYLSOEKER:
            return 'Enslig mindreårig asylsøker';
        case Vergetype.ENSLIG_MINDREAARIG_FLYKTNING:
            return 'Enslig mindreårig flyktning inklusive midlertidige saker for denne gruppen';
        case Vergetype.FORVALTNING_UTENFOR_VERGEMAAL:
            return 'Forvaltning utenfor vergemål';
        default:
            return '';
    }
}

function vergeEllerFullmaktOmfangBeskrivelse(omfangType: VergemaalEllerFullmaktOmfangType) {
    switch(omfangType) {
        case VergemaalEllerFullmaktOmfangType.UTLENDINGSSAKER:
            return 'Ivareta personens interesser innenfor det personlige og økonomiske området herunder utlendingssaken (kun for EMA)';
        case VergemaalEllerFullmaktOmfangType.PERSONLIGE_INTERESSER:
            return 'Ivareta personens interesser innenfor det personlige området';
        case VergemaalEllerFullmaktOmfangType.OEKONOMISKE_INTERESSER:
            return 'Ivareta personens interesser innenfor det økonomiske området';
        case VergemaalEllerFullmaktOmfangType.PERSONLIGE_OG_OEKONOMISKE_INTERESSER:
            return 'Ivareta personens interesser innenfor det personlige og økonomiske området';
        default:
            return '';
    }
}

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
                <Normaltekst>{vergeEllerFullmaktOmfangBeskrivelse(omfang)}</Normaltekst>
            </div>
        </div>
    )
}

function Verge(props: {vergemaal: VergemaalEllerFremtidsfullmakt}) {
    const {type, embete, vergeEllerFullmektig, folkeregistermetadata} = props.vergemaal;
    const {ajourholdstidspunkt, gyldighetstidspunkt} = folkeregistermetadata;

    return (
        <div className="underinformasjon">
            <Normaltekst className="overinformasjon">{vergetypeBeskrivelse(type)}</Normaltekst>
            <VergeEllerFullmakt vergeEllerFullmektig={vergeEllerFullmektig}/>
            <UndertekstBold className="overinformasjon">Fylkesmannsembete</UndertekstBold>
            <Normaltekst>{embete}</Normaltekst>
            <Normaltekst>
                {`${ajourholdstidspunkt && formateLocalDate(ajourholdstidspunkt)} - ${gyldighetstidspunkt? formateLocalDate(gyldighetstidspunkt):''}`}
            </Normaltekst>
        </div>
    );
}

function Vergemaal(props: Pick<VergeOgFullmaktData, 'vergemaalEllerFremtidsfullmakt'>) {
    const { vergemaalEllerFremtidsfullmakt, ...rest } = props;

    const vergemaalListe = isNotEmptyArray(vergemaalEllerFremtidsfullmakt)
                                ? vergemaalEllerFremtidsfullmakt.map((vergemaal,index) => <Verge vergemaal={vergemaal} key={index}/>)
                                : EMDASH;

    return (
        <Informasjonsbolk header="Bruker er under vergemål" {...rest}>
            {vergemaalListe}
        </Informasjonsbolk>

    );
}

export default Vergemaal;
