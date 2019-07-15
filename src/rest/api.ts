import { FetchInfo } from './utils';

export interface FnrFetchParams {
    fnr: string;
}

export const lagHentPersonaliaFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: '',
});

export const lagHentRegistreringFetchInfo = (params: FnrFetchParams): FetchInfo => ({
    url: `/veilarbregistrering/api/registrering?fnr=${params.fnr}`,
});
