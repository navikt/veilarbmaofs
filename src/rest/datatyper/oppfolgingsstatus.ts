import { OrNothing, StringOrNothing } from '../../utils/felles-typer';

export interface OppfolgingEnhet {
	navn: StringOrNothing;
	enhetId: StringOrNothing;
}
export type Formidlingsgruppe = 'ARBS' | 'IARBS' | 'ISERV' | 'PARBS' | 'RARBS';
export type Kvalifiseringsgruppe = 'BATT' | 'BFORM' | 'BKART' | 'IKVAL' | 'IVURD' | 'KAP11' | 'OPPFI' | 'VARIG' | 'VURDI' | 'VURDU';
export type Hovedmaalgruppe = 'OKEDELT' | 'SKAFFEA' | 'BEHOLDEA';

export interface OppfolgingsstatusData {
	oppfolgingsenhet: OppfolgingEnhet;
	veilederId: StringOrNothing;
	formidlingsgruppe: OrNothing<Formidlingsgruppe>;
	servicegruppe: OrNothing<Kvalifiseringsgruppe>;
	hovedmaalkode: OrNothing<Hovedmaalgruppe>;
}

export function erInnsatsgruppe(kvalifiseringsgruppe: OrNothing<Kvalifiseringsgruppe>) {
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

export function erServicegruppe(kvalifiseringsgruppe: OrNothing<Kvalifiseringsgruppe>) {
	switch (kvalifiseringsgruppe) {
		case 'IVURD':
		case 'KAP11':
		case 'OPPFI':
		case 'VURDI':
		case 'VURDU':
		case 'BKART':
			return true;
		default:
			return false;
	}
}
