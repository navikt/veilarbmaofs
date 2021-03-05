import { OrNothing, StringOrNothing } from '../../utils/felles-typer';

export interface GrunnPersonalia {
	fornavn: string;
	mellomnavn: StringOrNothing;
	etternavn: string;
	forkortetNavn: string;
	fodselsnummer: string;
	fodselsdato: string;
	dodsdato: StringOrNothing;
	kjonn: string;
}

export interface PersonsBarn extends GrunnPersonalia {
	harSammeBosted: boolean;
}

export interface Enhet {
	enhetsnummer: string;
	navn: string;
}

export interface PersonaliaSivilstand {
	sivilstand: string;
	fraDato: StringOrNothing;
}

export interface PersonaliaTelefon {
	prioritet: string;
	telefonNr: string;
	master: string;
}

export interface PersonaliaPartner extends GrunnPersonalia {
	harSammeBosted: boolean;
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
	type: StringOrNothing;
	coAdressenavn: StringOrNothing;
	vegadresse: OrNothing<Vegadresse>;
	postboksadresse: OrNothing<Postboksadresse>;
	utenlandskAdresse: OrNothing<Utenlandskadresse>;
	postadresseIFrittFormat: OrNothing<PostadresseIFrittFormat>;
	utenlandskAdresseIFrittFormat: OrNothing<UtenlandskadresseIFrittFormat>;
}

export interface VergeNavn {
	fornavn: StringOrNothing
	mellomnavn: StringOrNothing;
	etternavn: StringOrNothing;
}

export interface VergeEllerFullmektig {
	navn: VergeNavn;
	motpartsPersonident: StringOrNothing;
	omfang: StringOrNothing;
}

export interface Folkeregistermetadata {
	ajourholdstidspunkt: StringOrNothing;
	gyldighetstidspunkt: StringOrNothing;
}

export interface VergemaalEllerFremtidsfullmakt {
	type: StringOrNothing;
	embete: StringOrNothing;
	vergeEllerFullmektig: VergeEllerFullmektig;
	folkeregistermetadata: Folkeregistermetadata;
}

export interface Fullmakter {
	motpartsPersonident: StringOrNothing;
	motpartsRolle: StringOrNothing;
	omraader: string[];
	gyldigFraOgMed: StringOrNothing;
	gyldigTilOgMed: StringOrNothing;
}

export interface PersonaliaV2Info extends GrunnPersonalia {
	barn: PersonsBarn[];
	kontonummer: string;
	geografiskEnhet: OrNothing<Enhet>;
	telefon: PersonaliaTelefon[];
	epost: StringOrNothing;
	statsborgerskap: string;
	sivilstand: PersonaliaSivilstand;
	partner: OrNothing<PersonaliaPartner>;
	bostedsadresse: OrNothing<Bostedsadresse>;
	oppholdsadresse: OrNothing<Oppholdsadresse>;
	kontaktadresser: Kontaktadresse[];
	vergemaalEllerFremtidsfullmakt: VergemaalEllerFremtidsfullmakt[];
	fullmakt: Fullmakter[];
}
