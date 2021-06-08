export const PERSONALIA_DATA_FRA_PDL = 'veilarbmaofs.personalia.pdl.persondata';
export const SPOR_OM_TILBAKEMELDING = 'veilarbmaofs.spor.om.tilbakemelding';

export const TOGGLES = [
	PERSONALIA_DATA_FRA_PDL,
	SPOR_OM_TILBAKEMELDING
];

export interface Features {
	[PERSONALIA_DATA_FRA_PDL]: boolean;
	[SPOR_OM_TILBAKEMELDING]: boolean;
}
