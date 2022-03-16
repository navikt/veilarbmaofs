import { Gradering } from '../rest/datatyper/personaliav2';
import { OrNothing } from './felles-typer';
import EMDASH from './emdash';

export const APP_NAME = 'veilarbmaofs';

export const VEDTAKSSTATUSER = {
	avsluttet: 'Avsluttet',
	iverksatt: 'Iverksatt'
};

export function graderingBeskrivelse(gradering: Gradering) {
	switch (gradering) {
		case Gradering.UKJENT:
			return 'Sperret adresse, ukjent';
		case Gradering.FORTROLIG:
			return 'Sperret adresse, fortrolig';
		case Gradering.STRENGT_FORTROLIG:
			return 'Sperret adresse, strengt fortrolig';
		case Gradering.STRENGT_FORTROLIG_UTLAND:
			return 'Sperret adresse, strengt fortrolig utland';
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
