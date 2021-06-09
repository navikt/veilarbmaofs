import { Hovedmal, Innsatsgruppe } from '../rest/datatyper/innsatsbehov';
import EMDASH from './emdash';
import { OppfolgingsstatusData, Servicegruppe } from '../rest/datatyper/oppfolgingsstatus';
import { OrNothing, StringOrNothing } from './felles-typer';
import { PersonaliaInfo } from '../rest/datatyper/personalia';
import { VeilederData } from '../rest/datatyper/veileder';

export function mapServicegruppeTilTekst(servicegruppe: OrNothing<Servicegruppe>): string {
	switch (servicegruppe) {
		case 'OPPFI':
			return 'Helserelatert arbeidsrettet oppfølging i NAV';
		case 'VURDI':
			return 'Sykmeldt, oppfølging på arbeidsplassen';
		case 'VURDU':
			return 'Sykmeldt uten arbeidsgiver';
		default:
			return EMDASH;
	}
}

export function mapHovedmalTilTekst(hovedmal: OrNothing<Hovedmal>): string {
	switch (hovedmal) {
		case Hovedmal.BEHOLDE_ARBEID:
			return 'Beholde arbeid';
		case Hovedmal.OKE_DELTAKELSE:
			return 'Øke deltakelse eller mål om arbeid';
		case Hovedmal.SKAFFE_ARBEID:
			return 'Skaffe arbeid';
		default:
			return EMDASH;
	}
}

export function mapInnsatsgruppeTilTekst(innsatsgruppe: OrNothing<Innsatsgruppe>): string {
	switch (innsatsgruppe) {
		case Innsatsgruppe.STANDARD_INNSATS:
			return 'Standardinnsats';
		case Innsatsgruppe.SITUASJONSBESTEMT_INNSATS:
			return 'Situasjonsbestemt innsats';
		case Innsatsgruppe.SPESIELT_TILPASSET_INNSATS:
			return 'Spesielt tilpasset innsats';
		case Innsatsgruppe.GRADERT_VARIG_TILPASSET_INNSATS:
			return 'Gradert varig tilpasset innsats';
		case Innsatsgruppe.VARIG_TILPASSET_INNSATS:
			return 'Varig tilpasset innsats';
		default:
			return EMDASH;
	}
}

export function hentOppfolgingsEnhetTekst(oppfolgingsstatus: OppfolgingsstatusData | null): StringOrNothing {
	if (!oppfolgingsstatus || !oppfolgingsstatus.oppfolgingsenhet) {
		return null;
	}

	const {
		oppfolgingsenhet: { enhetId, navn }
	} = oppfolgingsstatus;
	return `${enhetId} ${navn}`;
}

export function hentGeografiskEnhetTekst(personalia: PersonaliaInfo | null): StringOrNothing {
	if (!personalia || !personalia.geografiskEnhet) {
		return null;
	}

	const {
		geografiskEnhet: { enhetsnummer, navn }
	} = personalia;
	return `${enhetsnummer} ${navn}`;
}

export function hentVeilederTekst(veileder: VeilederData | null): StringOrNothing {
	if (!veileder) {
		return null;
	}

	return `${veileder.ident} ${veileder.navn}`;
}
