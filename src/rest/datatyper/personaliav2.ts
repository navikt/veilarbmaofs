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

export interface PersonaliaBarn extends GrunnPersonalia {
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

export interface Vegadresse {
	postnummer: string;
	husnummer: number;
	husbokstav: StringOrNothing;
	kommunenummer: string;
	adressenavn: StringOrNothing;
	tilleggsnavn: StringOrNothing;
	poststed: string;
}

export interface PersonaliaBostedsadresse {
	vegadresse: OrNothing<Vegadresse>;
}

export interface PersonaliaMidlertidigAdresseUtland {
	adresselinje1: string;
	adresselinje2: StringOrNothing;
	adresselinje3: StringOrNothing;
	adresselinje4: StringOrNothing;
	byEllerStednavn: StringOrNothing;
	postkode: string;
	landkode: string;
}

export interface PersonaliaPostadresse {
	adresselinje1: string;
	adresselinje2: StringOrNothing;
	adresselinje3: StringOrNothing;
	postnummer: string;
}

export interface PersonaliaV2Info extends GrunnPersonalia {
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
	bostedsadresse: OrNothing<PersonaliaBostedsadresse>;
	midlertidigAdresseUtland: OrNothing<PersonaliaMidlertidigAdresseUtland>;
	postAdresse: OrNothing<PersonaliaPostadresse>;
	egenAnsatt: boolean;
}
