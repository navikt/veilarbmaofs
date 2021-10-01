import { OppfolgingsstatusData, Servicegruppe } from '../rest/datatyper/oppfolgingsstatus';
import { OrNothing } from './felles-typer';

export function erBrukerSykmeldt(oppfolging: OppfolgingsstatusData): boolean {
	return oppfolging.formidlingsgruppe === 'IARBS' && oppfolging.servicegruppe === 'VURDI';
}

export function erInnsatsgruppe(kvalifiseringsgruppe: OrNothing<Servicegruppe>) {
	switch (kvalifiseringsgruppe) {
		case 'IKVAL':
		case 'BATT':
		case 'BFORM':
		case 'VARIG':
			return true;
		default:
			return false;
	}
}
