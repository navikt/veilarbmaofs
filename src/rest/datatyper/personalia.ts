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

export interface Gateadresse {
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

export interface Matrikkeladresse {
	bruksnummer: OrNothing<string>;
	eiendomsnavn: OrNothing<string>;
	festenummer: OrNothing<string>;
	gardsnummer: OrNothing<string>;
	kommunenummer: OrNothing<string>;
	landkode: OrNothing<string>;
	postnummer: OrNothing<string>;
	poststed: OrNothing<string>;
	seksjonsnummer: OrNothing<string>;
	tilleggsadresse: OrNothing<string>;
	undernummer: OrNothing<string>;
}

export interface PostboksadresseNorsk {
	landkode: string;
	postboksanlegg: string | null;
	postboksnummer: string;
	postnummer: string;
	poststed: string;
	tilleggsadresse: string | null;
}

export interface PersonaliaStrukturertAdresse {
	strukturertAdresse: {
		Gateadresse: OrNothing<Gateadresse>;
	};
}

export interface PersonaliaStrukturertMidlertidigAdresse {
	strukturertAdresse: {
		// Midlertidig adresse kan ha enten Gateadresse, Matrikkeladresse eller PostboksadresseNorsk
		Gateadresse: OrNothing<Gateadresse>;
		Matrikkeladresse: OrNothing<Matrikkeladresse>;
		PostboksadresseNorsk: OrNothing<PostboksadresseNorsk>
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
	midlertidigAdresseNorge: OrNothing<PersonaliaStrukturertMidlertidigAdresse>;
	midlertidigAdresseUtland: OrNothing<PersonaliaStrukturertMidlertidigAdresse>;
	postAdresse: PersonaliaPostadresse;
	egenAnsatt: boolean;
}
