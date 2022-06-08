import { Gradering, RelasjonsBosted } from '../rest/datatyper/personaliav2';
import { OrNothing } from './felles-typer';
import EMDASH from './emdash';

export const APP_NAME = 'veilarbmaofs';

export const VEDTAKSSTATUSER = {
	avsluttet: 'Avsluttet',
	iverksatt: 'Iverksatt'
};

export function graderingBeskrivelseBarn(gradering: Gradering) {
	return 'Barnet har adressebeskyttelse, ' + gradering.toLowerCase().replaceAll('_', ' ');
}

export function graderingBeskrivelsePartner(gradering: Gradering) {
	return 'Partner har adressebeskyttelse, ' + gradering.toLowerCase().replaceAll('_', ' ');
}

export function hentKilde(master: OrNothing<String>) {
	switch (master?.toLowerCase()) {
		case 'krr':
			return 'i Kontakt- og reservasjonsregisteret';
		case 'pdl':
			return 'av NAV';
		case 'freg':
			return 'i Folkeregisteret';
		default:
			return `i ${master}`;
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

export function hentBorMedBarnBeskrivelse(relasjonsBosted: RelasjonsBosted | null) {
	switch (relasjonsBosted) {
		case RelasjonsBosted.SAMME_BOSTED:
			return 'Bor med bruker';
		case RelasjonsBosted.ANNET_BOSTED:
			return 'Bor ikke med bruker';
		case RelasjonsBosted.UKJENT_BOSTED:
			return 'Bosted er ukjent';
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
