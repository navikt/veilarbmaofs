import createUseContext from 'constate';
import { RegistreringsData } from '../rest/datatyper/registreringsData';
import useFetch from '../rest/useFetch';
import { FnrFetchParams, lagHentRegistreringFetchInfo } from '../rest/api';

function useFetchStore() {
    const registrering = useFetch<RegistreringsData, FnrFetchParams>(lagHentRegistreringFetchInfo);
    return { registrering };
}

export const useFetchStoreContext = createUseContext(useFetchStore);
