import { OrNothing, StringOrNothing } from '../../utils/felles-typer';

export interface OppfolgingEnhet {
	navn: StringOrNothing;
	enhetId: StringOrNothing;
}
export type Formidlingsgruppe = 'ARBS' | 'IARBS' | 'ISERV' | 'PARBS' | 'RARBS';
export type Servicegruppe = 'BATT' | 'BFORM' | 'BKART' | 'IKVAL' | 'IVURD' | 'KAP11' | 'OPPFI' | 'VARIG' | 'VURDI' | 'VURDU';
export type Hovedmaalgruppe = 'OKEDELT' | 'SKAFFEA ' | 'BEHOLDEA';
export const HovedmaalkodeMap = {
	OKEDELT: 'Øke deltakelse eller mål om arbeid',
	SKAFFEA: 'Skaffe arbeid',
	BEHOLDEA: 'Beholde arbeid'
};

export interface OppfolgingsstatusData {
	oppfolgingsenhet: OppfolgingEnhet;
	veilederId: StringOrNothing;
	formidlingsgruppe: OrNothing<Formidlingsgruppe>;
	servicegruppe: OrNothing<Servicegruppe>;
	hovedmaalkode: OrNothing<Hovedmaalgruppe>;
}
