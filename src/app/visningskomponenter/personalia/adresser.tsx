import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import {PersonaliaBostedsadresse, PersonaliaInfo} from "./personalia";

import { Element, Normaltekst } from 'nav-frontend-typografi';

function SammensattFolkeregistrertAdresse(props: Pick<PersonaliaInfo, 'bostedsadresse'>) {
    if (isNullOrUndefined(props.bostedsadresse)) {
        return null;
    }

    return (
        <div className="underinformasjon">
            <Element>
                Folkeregistrert postadresse
            </Element>
            <AdresseVisning strukturertAdresse={props.bostedsadresse.strukturertAdresse}/>
        </div>
    );
}

function PostAdresse(props: Pick<PersonaliaInfo, 'postAdresse'>) {
    if (isNullOrUndefined(props.postAdresse) || isNullOrUndefined(props.postAdresse.ustrukturertAdresse)) {
        return null;
    }

    const { adresselinje1, adresselinje2, adresselinje3, adresselinje4, landkode } = props.postAdresse.ustrukturertAdresse;

    return (
        <div className="underinformasjon">
            <Element>
                Postadresse
            </Element>
            <Normaltekst>
                {adresselinje1}
            </Normaltekst>
            <Normaltekst>
                {adresselinje2}
            </Normaltekst>
            <Normaltekst>
                {adresselinje3}
            </Normaltekst>
            <Normaltekst>
                {adresselinje4}
            </Normaltekst>
            <Normaltekst>
                {landkode}
            </Normaltekst>
        </div>
    );
}

function MidlertidigNorge(props: Pick<PersonaliaInfo, 'midlertidigAdresseNorge'>) {
    if (isNullOrUndefined(props.midlertidigAdresseNorge)) {
        return null;
    }

    return (
        <div className="underinformasjon">
            <Element>
                Midlertidig adresse Norge
            </Element>
            <AdresseVisning strukturertAdresse={props.midlertidigAdresseNorge.strukturertAdresse}/>
        </div>
    );
}

function MidlertidigUtland(props: Pick<PersonaliaInfo, 'midlertidigAdresseUtland'>) {
    if (isNullOrUndefined(props.midlertidigAdresseUtland)) {
        return null;
    }

    return (
        <div className="underinformasjon">
            <Element>
                Midlertidig adresse Utland
            </Element>
            <AdresseVisning strukturertAdresse={props.midlertidigAdresseUtland.strukturertAdresse}/>
        </div>
    );
}

function AdresseVisning(prop: PersonaliaBostedsadresse) {
    const { gatenavn, husnummer, husbokstav, postnummer, poststed } = prop.strukturertAdresse.Gateadresse;
    const nummer = husnummer ? husnummer : '';
    const bokstav = husbokstav ? husbokstav : '';

    return (
        <>
            <Normaltekst>
                {`${gatenavn} ${nummer}${bokstav}`}
            </Normaltekst>
            <Normaltekst>
                {`${postnummer} ${poststed}`}
            </Normaltekst>
        </>);
}

type Props = Pick<PersonaliaInfo, 'bostedsadresse'> & Pick<PersonaliaInfo, 'postAdresse'> & Pick<PersonaliaInfo, 'midlertidigAdresseNorge'> & Pick<PersonaliaInfo, 'midlertidigAdresseUtland'>;

function Adresser(props: Props) {
    const { bostedsadresse, postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland, ...rest} = props;
    return (
        <div {...rest}>
            <SammensattFolkeregistrertAdresse bostedsadresse={bostedsadresse}/>
            <PostAdresse postAdresse={postAdresse}/>
            <MidlertidigNorge midlertidigAdresseNorge={midlertidigAdresseNorge}/>
            <MidlertidigUtland midlertidigAdresseUtland={midlertidigAdresseUtland}/>
        </div>
    );
}

export default Adresser;

