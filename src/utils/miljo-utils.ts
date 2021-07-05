export const NAIS_PREPROD_SUFFIX = 'nais.preprod.local';
export const NAIS_PROD_SUFFIX = 'nais.adeo.no';

export const NAV_INTERN_PREPROD_SUFFIX = 'dev.intern.nav.no';
export const NAV_INTERN_PROD_SUFFIX = 'intern.nav.no';

const DEV_DOMAINS = ['dev', 'app-q1', 'app-q0', 'localhost'];

const erITestMiljo = (): boolean => {
	return window.location.hostname.split('.').findIndex(domain => DEV_DOMAINS.includes(domain)) >= 0;
};

export function finnNaisDomene() {
	return erITestMiljo() ? NAIS_PREPROD_SUFFIX : NAIS_PROD_SUFFIX;
}

export function finnInternNavDomene() {
	return erITestMiljo() ? NAV_INTERN_PREPROD_SUFFIX : NAV_INTERN_PROD_SUFFIX;
}
