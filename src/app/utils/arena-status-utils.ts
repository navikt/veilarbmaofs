import {OppfolgingData} from "../datatyper/oppfolging";

export function erBrukerSykmeldt(oppfolging: OppfolgingData): boolean {
    return oppfolging.formidlingsgruppe === "IARBS" && oppfolging.servicegruppe === "VURDI";
}

export function trengerVurdering(oppfolging: OppfolgingData): boolean {
    return oppfolging.formidlingsgruppe !== 'ISERV' && oppfolging.servicegruppe === 'IVURD';
}
export function trengerAEV(oppfolging: OppfolgingData): boolean {
    return oppfolging.formidlingsgruppe !== 'ISERV' && oppfolging.servicegruppe === 'BKART';
}