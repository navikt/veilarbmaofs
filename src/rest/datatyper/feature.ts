export const PERSONALIA_DATA_FRA_PDL = 'veilarbmaofs.personalia.pdl.persondata';
export const PERSONALIA_DATA_FRA_TPS = 'veilarbmaofs.personalia.tps.persondata';
export const SPOR_OM_TILBAKEMELDING = 'veilarbmaofs.spor.om.tilbakemelding';
export const INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE = 'veilarbmaofs.hent_innsatsgruppe_og_hovedmal_fra_vedtaksstotte';
export const HENT_REGISTRERING_FRA_VEILARBPERSON = 'veilarbmaofs.hent_registrering_fra_veilarbperson';

export const TOGGLES = [
	PERSONALIA_DATA_FRA_PDL,
	PERSONALIA_DATA_FRA_TPS,
	SPOR_OM_TILBAKEMELDING,
	INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE,
	HENT_REGISTRERING_FRA_VEILARBPERSON
];

export interface Features {
	[PERSONALIA_DATA_FRA_PDL]: boolean;
	[PERSONALIA_DATA_FRA_TPS]: boolean;
	[SPOR_OM_TILBAKEMELDING]: boolean;
	[INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE]: boolean;
	[HENT_REGISTRERING_FRA_VEILARBPERSON]: boolean;
}

export const initialFeatures: Features =
	{
		[PERSONALIA_DATA_FRA_PDL]: false,
		[PERSONALIA_DATA_FRA_TPS]: false,
		[SPOR_OM_TILBAKEMELDING]: false,
		[INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE]: false,
		[HENT_REGISTRERING_FRA_VEILARBPERSON]: false
	};
