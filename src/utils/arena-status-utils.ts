import { OppfolgingsstatusData } from '../rest/datatyper/oppfolgingsstatus';

export function erBrukerSykmeldt(oppfolging: OppfolgingsstatusData): boolean {
    return oppfolging.formidlingsgruppe === 'IARBS' && oppfolging.servicegruppe === 'VURDI';
}

export function trengerVurdering(oppfolging: OppfolgingsstatusData): boolean {
    return oppfolging.formidlingsgruppe !== 'ISERV' && oppfolging.servicegruppe === 'IVURD';
}
export function trengerAEV(oppfolging: OppfolgingsstatusData): boolean {
    return oppfolging.formidlingsgruppe !== 'ISERV' && oppfolging.servicegruppe === 'BKART';
}
