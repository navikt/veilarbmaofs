import { OppfolgingsstatusData } from '../rest/datatyper/oppfolgingsstatus';

export function erBrukerSykmeldt(oppfolging: OppfolgingsstatusData): boolean {
	return oppfolging.formidlingsgruppe === 'IARBS' && oppfolging.servicegruppe === 'VURDI';
}
