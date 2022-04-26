import { OrNothing, StringOrNothing } from '../../utils/felles-typer';

export enum Gradering {
	UKJENT = 'UKJENT',
	UGRADERT = 'UGRADERT',
	FORTROLIG = 'FORTROLIG',
	STRENGT_FORTROLIG = 'STRENGT_FORTROLIG',
	STRENGT_FORTROLIG_UTLAND = 'STRENGT_FORTROLIG_UTLAND'
}

export interface GrunnPersonalia {
	fornavn: StringOrNothing;
	mellomnavn: StringOrNothing;
	etternavn: StringOrNothing;
	forkortetNavn: StringOrNothing;
	fodselsnummer: string;
	fodselsdato: string;
	dodsdato: StringOrNothing;
	kjonn: StringOrNothing;
}

export interface PersonsBarn extends GrunnPersonalia {
	gradering: Gradering;
	erEgenAnsatt: boolean;
	harSammeBosted: boolean;
	harVeilederTilgang: boolean;
}

export interface Enhet {
	enhetsnummer: string;
	navn: string;
}

export interface PersonaliaSivilstand {
	sivilstand: StringOrNothing;
	fraDato: StringOrNothing;
	harSammeBosted: StringOrNothing;
	registrertDato: StringOrNothing;
	master: StringOrNothing;
}

export interface PersonaliaTelefon {
	prioritet: string;
	telefonNr: string;
	registrertDato: StringOrNothing;
	master: string;
}

export interface Vegadresse {
	matrikkelId: OrNothing<number>;
	postnummer: StringOrNothing;
	husnummer: StringOrNothing;
	husbokstav: StringOrNothing;
	kommunenummer: StringOrNothing;
	kommune: StringOrNothing;
	adressenavn: StringOrNothing;
	tilleggsnavn: StringOrNothing;
	poststed: StringOrNothing;
}

export interface Matrikkeladresse {
	matrikkelId: OrNothing<number>;
	bruksenhetsnummer: StringOrNothing;
	tilleggsnavn: StringOrNothing;
	postnummer: StringOrNothing;
	kommunenummer: StringOrNothing;
	kommune: StringOrNothing;
	poststed: StringOrNothing;
}

export interface Utenlandskadresse {
	adressenavnNummer: StringOrNothing;
	bygningEtasjeLeilighet: StringOrNothing;
	postboksNummerNavn: StringOrNothing;
	postkode: StringOrNothing;
	bySted: StringOrNothing;
	regionDistriktOmraade: StringOrNothing;
	landkode: StringOrNothing;
}

export interface Ukjentbosted {
	bostedskommune: StringOrNothing;
	kommune: StringOrNothing;
}

export interface Postboksadresse {
	postbokseier: StringOrNothing;
	postboks: StringOrNothing;
	postnummer: StringOrNothing;
	poststed: StringOrNothing;
}

export interface PostadresseIFrittFormat {
	adresselinje1: StringOrNothing;
	adresselinje2: StringOrNothing;
	adresselinje3: StringOrNothing;
	postnummer: StringOrNothing;
	poststed: StringOrNothing;
}

export interface UtenlandskadresseIFrittFormat {
	adresselinje1: StringOrNothing;
	adresselinje2: StringOrNothing;
	adresselinje3: StringOrNothing;
	byEllerStedsnavn: StringOrNothing;
	postkode: StringOrNothing;
	landkode: StringOrNothing;
}

export interface Bostedsadresse {
	coAdressenavn: StringOrNothing;
	vegadresse: OrNothing<Vegadresse>;
	matrikkeladresse: OrNothing<Matrikkeladresse>;
	utenlandskAdresse: OrNothing<Utenlandskadresse>;
	ukjentBosted: OrNothing<Ukjentbosted>;
}

export interface Oppholdsadresse {
	coAdressenavn: StringOrNothing;
	vegadresse: OrNothing<Vegadresse>;
	matrikkeladresse: OrNothing<Matrikkeladresse>;
	utenlandskAdresse: OrNothing<Utenlandskadresse>;
}

export interface Kontaktadresse {
	type: String;
	coAdressenavn: StringOrNothing;
	vegadresse: OrNothing<Vegadresse>;
	postboksadresse: OrNothing<Postboksadresse>;
	utenlandskAdresse: OrNothing<Utenlandskadresse>;
	postadresseIFrittFormat: OrNothing<PostadresseIFrittFormat>;
	utenlandskAdresseIFrittFormat: OrNothing<UtenlandskadresseIFrittFormat>;
}

export interface PersonaliaEpost {
	epostAdresse: StringOrNothing;
	epostSistOppdatert: StringOrNothing;
	master: StringOrNothing;
}

export interface PersonaliaV2Info extends GrunnPersonalia {
	barn: PersonsBarn[];
	kontonummer: string;
	geografiskEnhet: OrNothing<Enhet>;
	telefon: PersonaliaTelefon[];
	epost: OrNothing<PersonaliaEpost>;
	statsborgerskap: string;
	sivilstand: PersonaliaSivilstand[];
	bostedsadresse: OrNothing<Bostedsadresse>;
	oppholdsadresse: OrNothing<Oppholdsadresse>;
	kontaktadresser: Kontaktadresse[];
	malform: StringOrNothing;
}
