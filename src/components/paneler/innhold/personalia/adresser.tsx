import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import {
    Gateadresse,
    Matrikkeladresse,
    PersonaliaInfo,
    PersonaliaStrukturertMidlertidigAdresse
} from '../../../../rest/datatyper/personalia';
import EMDASH from '../../../../utils/emdash';
import { isNullOrUndefined, visEmdashHvisNull } from '../../../../utils';
import { OrNothing } from '../../../../utils/felles-typer';

function SammensattFolkeregistrertAdresse(props: Pick<PersonaliaInfo, 'bostedsadresse'>) {
    if (isNullOrUndefined(props.bostedsadresse)) {
        return null;
    }

    const adresse = props.bostedsadresse.strukturertAdresse.Gateadresse!;

    return (
        <div className="underinformasjon">
            <Element>
                Folkeregistrert postadresse
            </Element>
            {!isNullOrUndefined(adresse) ? <GateAdresse adresse={adresse}/> : EMDASH}
        </div>
    );
}

interface MidlertidigAdresseVisningProps {
    overskrift: string;
    midlertidigAdresse: OrNothing<PersonaliaStrukturertMidlertidigAdresse>;
}

function MidlertidigAdresseVisning(props: MidlertidigAdresseVisningProps) {
    if (isNullOrUndefined(props.midlertidigAdresse)) {
        return null;
    }

    const strukturertAdresse = props.midlertidigAdresse!.strukturertAdresse;

    return (
        <div className="underinformasjon">
            <Element>
                {props.overskrift}
            </Element>
            {strukturertAdresse.Matrikkeladresse
                ? <MatrikkelAdresse adresse={strukturertAdresse.Matrikkeladresse}/>
                : <GateAdresse adresse={strukturertAdresse.Gateadresse!}/>
            }
        </div>
    );
}

function PostAdresse(props: Pick<PersonaliaInfo, 'postAdresse'>) {
    if (isNullOrUndefined(props.postAdresse) || isNullOrUndefined(props.postAdresse.ustrukturertAdresse)) {
        return null;
    }

    const {adresselinje1, adresselinje2, adresselinje3, adresselinje4, landkode} = props.postAdresse.ustrukturertAdresse;

    return (
        <div className="underinformasjon">
            <Element> Postadresse </Element>
            <Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(adresselinje4)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(landkode)} </Normaltekst>
        </div>
    );
}

function MatrikkelAdresse(props: { adresse: Matrikkeladresse }) {
    const {
        postnummer, poststed, landkode,
        gardsnummer, bruksnummer, festenummer,
        undernummer, eiendomsnavn, tilleggsadresse
    } = props.adresse;
    return (
        <>
            <Normaltekst>
                Gårdsnummer: {gardsnummer}<br/>
                Bruksnummer: {bruksnummer}<br/>
                Festenummer: {festenummer}<br/>
                Undernummer: {undernummer}<br/>
                Eiendomsnavn: {eiendomsnavn}<br/>
                Tilleggsadresse: {tilleggsadresse}<br/>
            </Normaltekst>
            <Normaltekst>
                {`${postnummer || ''} ${poststed || ''}, ${landkode || ''}`}
            </Normaltekst>
        </>
    );
}

function GateAdresse(prop: { adresse: Gateadresse }) {
    const {gatenavn, husnummer, husbokstav, postnummer, poststed} = prop.adresse;
    return (
        <>
            <Normaltekst>
                {`${gatenavn || ''} ${husnummer || ''}${husbokstav || ''}`}
            </Normaltekst>
            <Normaltekst>
                {`${postnummer} ${poststed}`}
            </Normaltekst>
        </>
    );
}

type Props =
    Pick<PersonaliaInfo, 'bostedsadresse'>
    & Pick<PersonaliaInfo, 'postAdresse'>
    & Pick<PersonaliaInfo, 'midlertidigAdresseNorge'>
    & Pick<PersonaliaInfo, 'midlertidigAdresseUtland'>;

function Adresser(props: Props) {
    const {bostedsadresse, postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland, ...rest} = props;
    return (
        <div {...rest}>
            <SammensattFolkeregistrertAdresse bostedsadresse={bostedsadresse}/>
            <PostAdresse postAdresse={postAdresse}/>
            <MidlertidigAdresseVisning overskrift="Midlertidig adresse Norge" midlertidigAdresse={midlertidigAdresseNorge}/>
            <MidlertidigAdresseVisning overskrift="Midlertidig adresse Utland" midlertidigAdresse={midlertidigAdresseUtland}/>
        </div>
    );
}

export default Adresser;
