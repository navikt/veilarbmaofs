import { Gradering, RelasjonsBosted } from '../rest/datatyper/personaliav2';
import { OrNothing } from './felles-typer';
import EMDASH from './emdash';

export const APP_NAME = 'veilarbmaofs';

export const VEDTAKSSTATUSER = {
	avsluttet: 'Avsluttet',
	iverksatt: 'Iverksatt'
};

export function graderingBeskrivelseBarn(gradering: Gradering) {
	switch (gradering) {
		case Gradering.UKJENT:
			return 'Barnet har adressebeskyttelse, ukjent';
		case Gradering.FORTROLIG:
			return 'Barnet har adressebeskyttelse, fortrolig';
		case Gradering.STRENGT_FORTROLIG:
			return 'Barnet har adressebeskyttelse, strengt fortrolig';
		case Gradering.STRENGT_FORTROLIG_UTLAND:
			return 'Barnet har adressebeskyttelse, strengt fortrolig utland';
		case Gradering.UGRADERT:
			return null;
	}
}

export function graderingBeskrivelsePartner(gradering: Gradering) {
	switch (gradering) {
		case Gradering.UKJENT:
			return 'Partner har adressebeskyttelse, ukjent';
		case Gradering.FORTROLIG:
			return 'Partner har adressebeskyttelse, fortrolig';
		case Gradering.STRENGT_FORTROLIG:
			return 'Partner har adressebeskyttelse, strengt fortrolig';
		case Gradering.STRENGT_FORTROLIG_UTLAND:
			return 'Partner har adressebeskyttelse, strengt fortrolig utland';
		case Gradering.UGRADERT:
			return null;
	}
}

export function hentKilde(master: OrNothing<String>) {
	switch (master) {
		case 'KRR':
			return 'i Kontakt- og reservasjonsregisteret';
		case 'PDL':
			return 'av NAV';
		case 'Freg':
			return 'i Folkeregisteret';
		default:
			return null;
	}
}

export function hentBorMedPartnerBeskrivelseGml(harSammeBosted: boolean) {
	switch (harSammeBosted) {
		case true:
			return 'Partner bor med bruker';
		case false:
			return 'Partner bor ikke med bruker';
		default:
			return null;
	}
}
export function hentBorMedPartnerBeskrivelse(relasjonsBosted: RelasjonsBosted) {
	switch (relasjonsBosted) {
		case RelasjonsBosted.SAMME_BOSTED:
			return 'Partner bor med bruker';
		case RelasjonsBosted.ANNET_BOSTED:
			return 'Partner bor ikke med bruker';
		case RelasjonsBosted.UKJENT_BOSTED:
			return 'Partners bosted er ukjent';
		default:
			return null;
	}
}

export function hentMalform(malform: OrNothing<String>) {
	switch (malform) {
		case 'nn':
			return 'Nynorsk';
		case 'nb':
			return 'Bokmål';
		case 'en':
			return 'Engelsk';
		case 'se':
			return 'Nordsamisk';
		default:
			return EMDASH;
	}
}

export function egenAnsattTekst() {
	return 'Partner er skjermet for innsyn';
}
