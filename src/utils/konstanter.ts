import {Gradering} from "../rest/datatyper/personaliav2";

export const APP_NAME = 'veilarbmaofs';

export const VEDTAKSSTATUSER = {
	avsluttet: 'Avsluttet',
	iverksatt: 'Iverksatt'
};

export function graderingBeskrivelse(gradering: Gradering) {
	switch(gradering) {
		case Gradering.UKJENT:
			return 'Sperret adresse, ukjent';
		case Gradering.FORTROLIG:
			return 'Sperret adresse, fortrolig';
		case Gradering.STRENGT_FORTROLIG:
			return 'Sperret adresse, strengt fortrolig';
		case Gradering.STRENGT_FORTROLIG_UTLAND:
			return 'Sperret adresse, strengt fortrolig utland';
		case Gradering.UGRADERT:
			return null;
	}
}
