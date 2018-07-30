import {OrNothing, StringOrNothing} from "../visningskomponenter/felles-typer";

export interface PersonaliaBarn {
    fornavn: string;
    mellomnavn: StringOrNothing;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNothing;
    harSammeBosted: boolean;
    kjonn: string;
}

export interface PersonaliaEnhet {
    enhetsnummer: string;
    navn: string;
}

export interface PersonaliaSivilstand {
    sivilstand: string;
    fraDato: StringOrNothing;
}

export interface PersonaliaPartner {
    fornavn: string;
    mellomnavn: StringOrNothing;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNothing;
    harSammeBosted: boolean;
    kjonn: string;
}
export interface PersonaliaStrukturertAdresse {
    strukturertAdresse: {
        Gateadresse: {
            landkode: string;
            tilleggsadresse: StringOrNothing;
            postnummer: string;
            poststed: string;
            husnummer: number;
            husbokstav: StringOrNothing;
            kommunenummer: string;
            gatenavn: StringOrNothing;
            bolignummer: StringOrNothing;
            gatenummer: OrNothing<number>;
        }
    }
}

export type PersonaliaBostedsadresse = PersonaliaStrukturertAdresse;

interface PersonaliaPostadresse {
    ustrukturertAdresse: {
        adresselinje1: string;
        adresselinje2: StringOrNothing;
        adresselinje3: StringOrNothing;
        adresselinje4: StringOrNothing;
        landkode: string;
    }
}

export interface PersonaliaInfo {
    fornavn: string;
    mellomnavn: StringOrNothing;
    etternavn: string,
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNothing,
    barn: PersonaliaBarn[];
    diskresjonskode: StringOrNothing;
    kontonummer: string;
    geografiskTilknytning: string;
    behandlendeEnhet: PersonaliaEnhet;
    telefon: string;
    epost: StringOrNothing;
    statsborgerskap: string;
    sikkerhetstiltak: StringOrNothing;
    sivilstand: PersonaliaSivilstand;
    partner: OrNothing<PersonaliaPartner>;
    bostedsadresse: PersonaliaBostedsadresse;
    midlertidigAdresseNorge: OrNothing<PersonaliaStrukturertAdresse>;
    midlertidigAdresseUtland: OrNothing<PersonaliaStrukturertAdresse>;
    postAdresse: PersonaliaPostadresse;
    egenAnsatt: boolean;
    kjonn: string;

}
