import {StringOrNull} from "../visningskomponenter/felles-typer";

export interface PersonaliaBarn {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull;
    harSammeBosted: boolean;
    kjonn: string;
}

export interface PersonaliaEnhet {
    enhetsnummer: string;
    navn: string;
}

export interface PersonaliaSivilstand {
    sivilstand: string;
    fraDato: StringOrNull;
}

export interface PersonaliaPartner {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull;
    harSammeBosted: boolean;
    kjonn: string;
}
export interface PersonaliaStrukturertAdresse {
    strukturertAdresse: {
        Gateadresse: {
            landkode: string;
            tilleggsadresse: StringOrNull;
            postnummer: string;
            poststed: string;
            husnummer: number;
            husbokstav: StringOrNull;
            kommunenummer: string;
            gatenavn: StringOrNull;
            bolignummer: StringOrNull;
            gatenummer: number;
        }
    }
}

export type PersonaliaBostedsadresse = PersonaliaStrukturertAdresse;

interface PersonaliaPostadresse {
    ustrukturertAdresse: {
        adresselinje1: string;
        adresselinje2: StringOrNull;
        adresselinje3: StringOrNull;
        adresselinje4: StringOrNull;
        landkode: string;
    }
}

export interface PersonaliaInfo {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string,
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull,
    barn: PersonaliaBarn[];
    diskresjonskode: StringOrNull;
    kontonummer: string;
    geografiskTilknytning: string;
    behandlendeEnhet: PersonaliaEnhet;
    telefon: string;
    epost: StringOrNull;
    statsborgerskap: string;
    sikkerhetstiltak: StringOrNull;
    sivilstand: PersonaliaSivilstand;
    partner: PersonaliaPartner;
    bostedsadresse: PersonaliaBostedsadresse;
    midlertidigAdresseNorge: PersonaliaStrukturertAdresse;
    midlertidigAdresseUtland: PersonaliaStrukturertAdresse;
    postAdresse: PersonaliaPostadresse;
    egenAnsatt: boolean;
    kjonn: string;

}