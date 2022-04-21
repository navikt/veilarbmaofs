import { axiosInstance } from './utils';
import { APP_NAME } from '../utils/konstanter';
import { OrNothing } from '../utils/felles-typer';
import { TOGGLES } from './datatyper/feature';
const headers = {
	headers: { 'Nav-Consumer-Id': APP_NAME }
};

export const fetchRegistrering = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/registrering?fnr=${fnr}`);
};

export const fetchCvOgJobbprofil = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/cv_jobbprofil?fnr=${fnr}`);
};

export const fetchVeileder = (veilederId: OrNothing<string>) => {
	return axiosInstance.get(`/veilarbveileder/api/veileder/${veilederId}`, headers);
};

export const fetchAktorId = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/aktorid?fnr=${fnr}`, headers);
};

export const fetchOppfolgingsstatus = (fnr: string) => {
	return axiosInstance.get(`/veilarboppfolging/api/person/${fnr}/oppfolgingsstatus`, headers);
};

export const fetchYtelser = (fnr: string) => {
	return axiosInstance.get(`/veilarboppfolging/api/person/${fnr}/ytelser`, headers);
};

export const fetchUnderOppfolging = (fnr: string) => {
	return axiosInstance.get(`/veilarboppfolging/api/underoppfolging?fnr=${fnr}`, headers);
};

export const fetchPersonalia = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/person/${fnr}`, headers);
};

export const fetchPersonaliaV2 = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/v2/person?fnr=${fnr}`, headers);
};

export const fetchVergOgFullmakt = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/v2/person/vergeOgFullmakt?fnr=${fnr}`, headers);
};

export const fetchSpraakTolk = (fnr: string) => {
	return axiosInstance.get(`/veilarbperson/api/v2/person/tolk?fnr=${fnr}`, headers);
};

export const fetchInnsatsbehov = (fnr: string) => {
	return axiosInstance.get(`/veilarbvedtaksstotte/api/innsatsbehov?fnr=${fnr}`, headers);
};

export const fetchFeatureToggle = () => {
	return axiosInstance.get(`/veilarbpersonflatefs/api/feature?${TOGGLES}`, headers);
};

export const fetchTilgorerBrukerUtrulletKontorForVedtaksstotte = (fnr: string) => {
	return axiosInstance.get(`/veilarbvedtaksstotte/api/utrulling/tilhorerBrukerUtrulletKontor?fnr=${fnr}`, headers);
};
