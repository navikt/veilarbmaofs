import { finnInternNavDomene, finnInternNavDomeneOld } from './miljo-utils';
import { OrNothing, StringOrNothing } from './felles-typer';
import EMDASH from './emdash';
import { Kursvarighet, KursVarighetEnhet } from '../rest/datatyper/arenaperson';
import { useCallback, useEffect } from 'react';
import moment from 'moment';

export const hasHashParam = (parameterName: string): boolean => {
	return window.location.hash.includes(parameterName);
};

export const hasQueryParam = (parameterName: string): boolean => {
	return window.location.search.includes(parameterName);
};

export function isNullOrUndefined(param: string | object | null | undefined): boolean {
	return param === undefined || param === null;
}

export function isNotEmptyArray(param: any[]): boolean {
	return param && param.length !== 0;
}

// Midlertidig permanent hack for å skille ut "tips til deg:" som vi får fra jobbsøkerkompetanse i feltet raadIngress
// eksempel-tekst: Du sier at du har lite erfaring som jobbsøker. Vi vil oppfordre deg til å jobbe godt med søknadene dine. Vi gir deg følgende tips:
export function skillUtTipsTilDegFraTekst(tekst: string): string[] {
	const splittetTekst: string[] = tekst.split('. ');
	const tips: string = splittetTekst.pop() || '';
	const resten = splittetTekst.join('. ').concat('. ');
	return Array.from([resten, tips]);
}

export function omit<S>(obj: S, ...props: string[]) {
	return Object.keys(obj)
		.filter(key => !props.includes(key))
		.reduce((acc, key) => {
			// @ts-ignore
			acc[key] = obj[key];
			return acc;
		}, {});
}

export function byggPamUrl(fnr: string, path = '/cv') {
	return `https://pam-personbruker-veileder.${finnInternNavDomeneOld()}${path}?fnr=${fnr}`;
}

export function lagPersonforvalterLenke(aktoerIdEllerFnr: string) {
	//Personforvalteren skal takle både aktørid og fnr.
	return `https://pdl-web.${finnInternNavDomene()}/endreperson?aktoerId=${aktoerIdEllerFnr}`;
}

export function visEmdashHvisNull(verdi: StringOrNothing) {
	return verdi ? verdi : EMDASH;
}

export function visEmdashHvisTom<T>(verdi: T[]): T[] | string {
	return verdi.length > 0 ? verdi : EMDASH;
}

export function safeMap<T, S>(verdi: T[] | null, fn: (t: T, i: number) => S): S[] | string {
	if (verdi == null) {
		return EMDASH;
	}
	return visEmdashHvisTom(verdi.map(fn));
}

export interface DatoType {
	year: string;
	month: string;
	day: string;
}

export function formaterDato(datoObjekt: DatoType | string | undefined | null, onlyYearMonth?: boolean) {
	if (isNullOrUndefined(datoObjekt)) {
		return EMDASH;
	}

	let lokalDato;
	let lokalDatoKunArManed = false;
	const yearMonthReg = /^\d{4}-\d{2}$/;
	if (typeof datoObjekt === 'string') {
		lokalDatoKunArManed = yearMonthReg.test(datoObjekt);
		lokalDato = new Date(datoObjekt);
	} else {
		lokalDato = new Date(
			Date.UTC(Number(datoObjekt!.year), Number(datoObjekt!.month) - 1, Number(datoObjekt!.day))
		);
	}
	const shortOption: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
	const longOption: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
	const options = onlyYearMonth || lokalDatoKunArManed ? shortOption : longOption;

	return lokalDato.toLocaleDateString('no-NO', options);
}

export function formateLocalDate(date: string | undefined | null) {
	return moment(date).format('DD.MM.YYYY');
}

export function safeSort(a: StringOrNothing, b: StringOrNothing) {
	if (a && b) {
		return a.localeCompare(b);
	} else if (a) {
		return -1;
	} else if (b) {
		return 1;
	} else {
		return 0;
	}
}

export function formaterVarighet(varighet: Kursvarighet): string {
	if (varighet.varighet == null || varighet.tidsenhet == null) {
		return EMDASH;
	}
	const storreEnnEn = varighet.varighet > 1;
	let enhetTekst = '';

	switch (varighet.tidsenhet) {
		case KursVarighetEnhet.TIME:
			enhetTekst = storreEnnEn ? 'timer' : 'time';
			break;
		case KursVarighetEnhet.DAG:
			enhetTekst = storreEnnEn ? 'dager' : 'dag';
			break;
		case KursVarighetEnhet.UKE:
			enhetTekst = storreEnnEn ? 'uker' : 'uke';
			break;
		case KursVarighetEnhet.MND:
			enhetTekst = storreEnnEn ? 'måneder' : 'måned';
			break;
		default:
			return EMDASH;
	}

	return `${varighet.varighet} ${enhetTekst}`;
}

export function useEventListener(name: string, listener: () => void) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const callback = useCallback(listener, []);

	useEffect(() => {
		window.addEventListener(name, callback);
		return () => window.removeEventListener(name, callback);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [callback, name]);
}

export function formateStringInUpperAndLowerCase(str: OrNothing<string>) {
	return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : EMDASH;
}

export function formatStringInUpperAndLowerCaseUnderscore(str: OrNothing<string>) {
	return str
		? str.replaceAll('_', ' ').charAt(0).toUpperCase() + str.replaceAll('_', ' ').slice(1).toLowerCase()
		: EMDASH;
}

export function formateFirstCharOfEachWordToUppercase(str: OrNothing<string>) {
	return str ? str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase()) : EMDASH;
}

export function removeWhitespace(input: string) {
	return input.replace(/ /g, '');
}

export function formatNumber(format: string, streng: string) {
	let result = '';
	let strengIndex = 0;

	for (let i = 0; i < format.length; i++) {
		if (streng[strengIndex] === undefined) {
			break;
		}
		if (format[i] === '#') {
			result += streng[strengIndex++];
		} else {
			result += format[i];
		}
	}

	return result;
}

export function formaterTelefonnummer(landkode: StringOrNothing, telefonnummer: string) {
	const utenSpace = removeWhitespace(telefonnummer);
	const formatertLandkode = landkode ? landkode + ' ' : '';

	if (utenSpace.length !== 8) {
		return telefonnummer;
	} else if (utenSpace.substring(0, 3) === '800') {
		return formatertLandkode + formatNumber('### ## ###', utenSpace);
	} else {
		return formatertLandkode + formatNumber('## ## ## ##', utenSpace);
	}
}
