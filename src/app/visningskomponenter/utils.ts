import EMDASH from "../utils/emdash";
import {isNullOrUndefined} from "../utils/util";
import {StringOrNothing} from "./felles-typer";

export function visEmdashHvisNull(verdi: StringOrNothing) {
    if (verdi) {
        return verdi;
    }
    return EMDASH;
}

export interface DatoType {
    year: string,
    month: string,
    day: string
}

export function formaterDato( datoObjekt: DatoType | string ) {
    if (isNullOrUndefined(datoObjekt)) {
        return null;
    }

    let lokalDato = null;
    if (typeof datoObjekt === 'string') {
        lokalDato = new Date(datoObjekt);
    } else {
        lokalDato = new Date(Date.UTC(Number(datoObjekt.year), Number(datoObjekt.month) - 1, Number(datoObjekt.day)));
    }

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const lokalDatoStreng = lokalDato.toLocaleDateString('no-NO', options);  // Resultat dato format: dd. mon. yyyy
    return lokalDatoStreng.replace(/\.\s/g,'.');  // erstattes '. ' med '.' så får vi resultat dato som: dd.mon.yyyy
}
