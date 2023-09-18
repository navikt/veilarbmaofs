import { axiosInstance } from './utils';
import { OrNothing } from '../utils/felles-typer';
import { toggles } from './datatyper/feature';
import { FrontendEvent } from '../utils/logger';

export const fetchRegistrering = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/registrering?fnr=${fnr}`);
};

export const fetchEnringIRegistreringsdata = (fnr: string) => {
	return axiosInstance.post(`/veilarbperson/api/person/registrering/endringer`, { fodselsnummer: fnr });
};

export const fetchCvOgJobbonsker = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/cv_jobbprofil?fnr=${fnr}`);
};

export const fetchVeileder = (veilederId: OrNothing<string>) => {
	return axiosInstance.get(`/veilarbveileder/api/veileder/${veilederId}`);
};

export const fetchAktorId = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/aktorid?fnr=${fnr}`);
};

export const fetchOppfolgingsstatus = (fnr: string) => {
	return axiosInstance.get(`/veilarboppfolging/api/person/${fnr}/oppfolgingsstatus`);
};

export const fetchYtelser = (fnr: string) => {
	return axiosInstance.get(`/veilarboppfolging/api/person/${fnr}/ytelser`);
};

export const fetchUnderOppfolging = (fnr: string) => {
	return axiosInstance.get(`/veilarboppfolging/api/underoppfolging?fnr=${fnr}`);
};

export const fetchPersonaliaV2 = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/v2/person?fnr=${fnr}`);
};

export const fetchVergOgFullmakt = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/v2/person/vergeOgFullmakt?fnr=${fnr}`);
};

export const fetchSpraakTolk = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/v2/person/tolk?fnr=${fnr}`);
};

export const fetchSiste14aVedtak = (fnr: string) => {
	return axiosInstance.get(`/veilarbvedtaksstotte/api/siste-14a-vedtak?fnr=${fnr}`);
};

export const fetchFeatureToggle = () => {
	return axiosInstance.get(`/veilarbpersonflatefs/api/feature?${toggles()}`);
};

export const fetchTilgorerBrukerUtrulletKontorForVedtaksstotte = (fnr: string) => {
	return axiosInstance.get(`/veilarbvedtaksstotte/api/utrulling/tilhorerBrukerUtrulletKontor?fnr=${fnr}`);
};

export function sendEventTilVeilarbperson(event: FrontendEvent) {
	return axiosInstance.post(`/veilarbperson/api/logger/event`, event);
}
