
// TODO disse datatypene er ikke i bruk nå, det er datatyper for å hente innsatsgruppe og hovedmål fra
// veilarbvedtaksstotte. Beholder de til senere siden det er implementert logikk for testk-mapping.

export enum Innsatsgruppe {
	STANDARD_INNSATS = 'STANDARD_INNSATS',
	SITUASJONSBESTEMT_INNSATS = 'SITUASJONSBESTEMT_INNSATS',
	SPESIELT_TILPASSET_INNSATS = 'SPESIELT_TILPASSET_INNSATS',
	GRADERT_VARIG_TILPASSET_INNSATS = 'GRADERT_VARIG_TILPASSET_INNSATS',
	VARIG_TILPASSET_INNSATS = 'VARIG_TILPASSET_INNSATS'
}

export enum  Hovedmal {
	SKAFFE_ARBEID = 'SKAFFE_ARBEID',
	BEHOLDE_ARBEID = 'BEHOLDE_ARBEID',
	OKE_DELTAKELSE = 'OKE_DELTAKELSE'
}

