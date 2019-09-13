import { GrunnPersonalia } from '../rest/datatyper/personalia';

export function kalkulerAlder(fodselsdato: Date): number {
	const diff = Date.now() - fodselsdato.getTime();
	return new Date(diff).getUTCFullYear() - 1970;
}

export function finnAldersTekst(personalia: GrunnPersonalia): string {
	if(personalia.dodsdato) {
		return '(DØD)';
	}
	const alder = kalkulerAlder(new Date(personalia.fodselsdato));
	return `${alder} år`;
}
