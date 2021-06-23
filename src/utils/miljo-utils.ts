export const NAIS_PREPROD_SUFFIX = 'preprod.local';
export const NAIS_PROD_SUFFIX = 'adeo.no';
export const NAV_INTERN_PREPROD_SUFFIX = 'dev.intern.nav.no';
export const NAV_INTERN_PROD_SUFFIX = 'intern.nav.no';

export function finnNaisMiljoStreng() {
	const host = window.location.host;
	const isProd = !host.includes('-');

	if (isProd) {
		return NAIS_PROD_SUFFIX;
	}
	return NAIS_PREPROD_SUFFIX;
}

export function finnNaisDomene() {
	return `nais.${finnNaisMiljoStreng()}`;
}

export function finnNavMiljoStreng() {
	const host = window.location.host;
	const isProd = !host.includes('-');

	if (isProd) {
		return NAV_INTERN_PROD_SUFFIX;
	}
	return NAV_INTERN_PREPROD_SUFFIX;
}

export function finnNavDomene() {
	return `${finnNavMiljoStreng()}`;
}
