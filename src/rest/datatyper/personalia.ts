import { OrNothing, StringOrNothing } from '../../utils/felles-typer';

export interface GrunnPersonalia {
    fornavn: string;
    mellomnavn: StringOrNothing;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNothing;
    kjonn: string;
}

export interface PersonaliaBarn extends  GrunnPersonalia {
    harSammeBosted: boolean;
}

export interface PersonaliaEnhet {
    enhetsnummer: string;
    navn: string;
}

export interface PersonaliaSivilstand {
    sivilstand: string;
    fraDato: StringOrNothing;
}

export interface PersonaliaPartner extends GrunnPersonalia {
    harSammeBosted: boolean;
}

interface Gateadresse {
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

export interface PersonaliaStrukturertAdresse {
    strukturertAdresse: {
        Gateadresse: OrNothing<Gateadresse>
    };
}

export type PersonaliaBostedsadresse = PersonaliaStrukturertAdresse;

interface PersonaliaPostadresse {
    ustrukturertAdresse: {
        adresselinje1: string;
        adresselinje2: StringOrNothing;
        adresselinje3: StringOrNothing;
        adresselinje4: StringOrNothing;
        landkode: string;
    };
}

export interface PersonaliaInfo extends GrunnPersonalia {
    barn: PersonaliaBarn[];
    diskresjonskode: StringOrNothing;
    kontonummer: string;
    geografiskTilknytning: string;
    geografiskEnhet: PersonaliaEnhet;
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

}
