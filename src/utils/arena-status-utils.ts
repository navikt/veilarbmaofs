import { OppfolgingsstatusData, Servicegruppe } from '../rest/datatyper/oppfolgingsstatus';

export function erBrukerSykmeldt(oppfolging: OppfolgingsstatusData): boolean {
	return oppfolging.formidlingsgruppe === 'IARBS' && oppfolging.servicegruppe === 'VURDI';
}

export function servicegruppeKodeTilBeskrivelse(servicegruppe: Servicegruppe): string {
	switch (servicegruppe) {
		case 'BATT':
			return 'Spesielt tilpasset innsats';
		case 'BFORM':
			return 'Situasjonsbestemt innsats';
		case 'BKART':
			return 'Behov for arbeidsevnevurdering';
		case 'IKVAL':
			return 'Standardinnsats';
		case 'IVURD':
			return 'Ikke vurdert';
		case 'KAP11':
			return 'Rettigheter etter Ftrl. Kapittel 11';
		case 'OPPFI':
			return 'Helserelatert arbeidsrettet oppfølging i NAV';
		case 'VARIG':
			return 'Varig tilpasset innsats';
		case 'VURDI':
			return 'Sykmeldt, oppfølging på arbeidsplassen';
		case 'VURDU':
			return 'Sykmeldt uten arbeidsgiver';
		default:
			return servicegruppe;
	}
}
