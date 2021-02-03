import { GrunnPersonalia } from '../rest/datatyper/personalia';
import { GrunnPersonalia as GrunnPersonaliaV2 } from '../rest/datatyper/personaliav2';

export function kalkulerAlder(fodselsdato: Date): number {
	const diff = Date.now() - fodselsdato.getTime();
	return new Date(diff).getUTCFullYear() - 1970;
}

export function finnAldersTekst(personalia: GrunnPersonalia): string {
	if (personalia.dodsdato) {
		return '(DØD)';
	}
	const alder = kalkulerAlder(new Date(personalia.fodselsdato));
	return `${alder} år`;
}

export function finnAldersTekstV2(personalia: GrunnPersonaliaV2): string {
	if (personalia.dodsdato) {
		return '(DØD)';
	}
	const alder = kalkulerAlder(new Date(personalia.fodselsdato));
	return `${alder} år`;
}
