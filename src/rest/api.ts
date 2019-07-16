import { FetchInfo } from './utils';

export interface FnrFetchParams {
    fnr: string;
}

export interface HentVeilederFetchParams {
    veilederId: string;
}

export const lagHentPersonaliaFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarbperson/api/person/${params.fnr}`,
});

export const lagHentRegistreringFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarbregistrering/api/registrering?fnr=${params.fnr}`,
});

export const lagHentCvFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/pam-cv-api/rest/v1/arbeidssoker/${params.fnr}`,
});

export const lagHentVeilederFetchInfo = (params: HentVeilederFetchParams): FetchInfo => ({
    url: `/veilarbveileder/api/veileder/${params.veilederId}`,
});

export const lagHentAktorIdFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarbperson/api/person/aktorid?fnr=${params.fnr}`,
});

export const lagHentOppfolgingsstatusFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarboppfolging/api/person/${params.fnr}/oppfolgingsstatus`,
});

export const lagHentJobbsokerkompetanseFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarbjobbsokerkompetanse/api/hent?fnr=${params.fnr}`,
});

export const lagHentYtelserFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarboppfolging/api/person/${params.fnr}/ytelser`,
});

export const lagHentUnderOppfolgingFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarboppfolging/api/underoppfolging?fnr=${params.fnr}`,
});
