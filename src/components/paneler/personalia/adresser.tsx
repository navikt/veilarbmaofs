import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaBostedsadresse, PersonaliaInfo } from '../../../rest/datatyper/personalia';
import EMDASH from '../../../utils/emdash';
import { isNullOrUndefined } from '../../../utils';
import { visEmdashHvisNull } from '../../../utils/utils';

function SammensattFolkeregistrertAdresse(props: Pick<PersonaliaInfo, 'bostedsadresse'>) {
    if (isNullOrUndefined(props.bostedsadresse)) {
        return null;
    }

    const harAdresse = !isNullOrUndefined(props.bostedsadresse.strukturertAdresse.Gateadresse);

    return (
        <div className="underinformasjon">
            <Element>
                Folkeregistrert postadresse
            </Element>
            {harAdresse ? <AdresseVisning strukturertAdresse={props.bostedsadresse.strukturertAdresse}/> : <>{EMDASH}</>}
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
            <Element> Postadresse </Element>
            <Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(adresselinje4)} </Normaltekst>
            <Normaltekst> {visEmdashHvisNull(landkode)} </Normaltekst>
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
            <AdresseVisning strukturertAdresse={props.midlertidigAdresseNorge!.strukturertAdresse}/>
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
            <AdresseVisning strukturertAdresse={props.midlertidigAdresseUtland!.strukturertAdresse}/>
        </div>
    );
}

function AdresseVisning(prop: PersonaliaBostedsadresse) {
    const { gatenavn, husnummer, husbokstav, postnummer, poststed } = prop.strukturertAdresse.Gateadresse!;
    const nummer = husnummer ? husnummer : '';
    const bokstav = husbokstav ? husbokstav : '';

    return (
        <>
            <Normaltekst>
                {`${gatenavn || ''} ${nummer}${bokstav}`}
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
