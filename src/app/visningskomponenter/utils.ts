import EMDASH from "../utils/emdash";
import {isNullOrUndefined} from "../utils/util";
import {StringOrNothing} from "./felles-typer";

export function visEmdashHvisNull(verdi: StringOrNothing) {
    return verdi ? verdi : EMDASH;
}
export function visEmdashHvisTom<T>(verdi: T[]): T[] | string {
    return verdi.length > 0 ? verdi : EMDASH;
}
export function safeMap<T, S>(verdi: T[] | null, fn: (t: T, i: number, ) => S): S[] | string {
    if (verdi == null) {
        return EMDASH;
    }
    return visEmdashHvisTom(verdi.map(fn));
}

export interface DatoType {
    year: string,
    month: string,
    day: string
}

export function formaterDato( datoObjekt: DatoType | string | undefined | null ) {
    if (isNullOrUndefined(datoObjekt)) {
        return EMDASH;
    }

    let lokalDato = null;
    if (typeof datoObjekt === 'string') {
        lokalDato = new Date(datoObjekt);
    } else {
        lokalDato = new Date(Date.UTC(Number(datoObjekt!.year), Number(datoObjekt!.month) - 1, Number(datoObjekt!.day)));
    }

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const lokalDatoStreng = lokalDato.toLocaleDateString('no-NO', options);  // Resultat dato format: dd. mon. yyyy
    return lokalDatoStreng.replace(/\.\s/g,'.');  // erstattes '. ' med '.' så får vi resultat dato som: dd.mon.yyyy
}

export function safeSort(a: string | undefined | null, b: string | undefined | null) {
    if (a) {
        return b ? a.localeCompare(b) : -1;
    } else if (b) {
        return a ? b.localeCompare(a) : 1;
    } else {
        return 0;
    }
}
