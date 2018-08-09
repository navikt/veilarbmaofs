import {GrunnPersonalia} from "../datatyper/personalia";

export function kalkulerAlder(fodselsdato: Date): number {
    const diff = Date.now() - fodselsdato.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
}

export function finAllderstekst(personalia: GrunnPersonalia): string {
    if(personalia.dodsdato){
        return '(DØD)'
    }
    const alder = kalkulerAlder(new Date(personalia.fodselsdato));
    return `${alder} år`;
}
