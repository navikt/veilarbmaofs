import createUseContext from 'constate';
import { RegistreringsData } from '../rest/datatyper/registreringsData';
import useFetch from '../rest/useFetch';
import {
    FnrFetchParams,
    HentVeilederFetchParams,
    lagHentAktorIdFetchInfo,
    lagHentCvFetchInfo, lagHentJobbsokerkompetanseFetchInfo,
    lagHentOppfolgingsstatusFetchInfo,
    lagHentPersonaliaFetchInfo,
    lagHentRegistreringFetchInfo, lagHentOppfolgingFetchInfo,
    lagHentVeilederFetchInfo, lagHentYtelserFetchInfo
} from '../rest/api';
import { PersonaliaInfo } from '../rest/datatyper/personalia';
import { ArenaPerson } from '../rest/datatyper/arenaperson';
import { VeilederData } from '../rest/datatyper/veileder';
import { OppfolgingsstatusData } from '../rest/datatyper/oppfolgingsstatus';
import { KartleggingData } from '../rest/datatyper/kartlegging';
import { OppfolgingData } from '../rest/datatyper/oppfolgingData';
import { YtelseDataType } from '../rest/datatyper/ytelse';

function useFetchStore() {
    const registrering = useFetch<RegistreringsData, FnrFetchParams>(lagHentRegistreringFetchInfo);
    const personalia = useFetch<PersonaliaInfo, FnrFetchParams>(lagHentPersonaliaFetchInfo);
    const cv = useFetch<ArenaPerson, FnrFetchParams>(lagHentCvFetchInfo);
    const veileder = useFetch<VeilederData, HentVeilederFetchParams>(lagHentVeilederFetchInfo);
    const aktorId = useFetch<{aktorId: string}, FnrFetchParams>(lagHentAktorIdFetchInfo);
    const oppfolgingsstatus = useFetch<OppfolgingsstatusData, FnrFetchParams>(lagHentOppfolgingsstatusFetchInfo);
    const jobbsokerkompetanse = useFetch<KartleggingData, FnrFetchParams>(lagHentJobbsokerkompetanseFetchInfo);
    const ytelser = useFetch<YtelseDataType, FnrFetchParams>(lagHentYtelserFetchInfo);
    const oppfolging = useFetch<OppfolgingData, FnrFetchParams>(lagHentOppfolgingFetchInfo);

    return {
        registrering, personalia, cv, veileder, aktorId,
        oppfolgingsstatus, jobbsokerkompetanse, ytelser, oppfolging
    };
}

export const useFetchStoreContext = createUseContext(useFetchStore);
