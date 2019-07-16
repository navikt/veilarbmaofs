import createUseContext from 'constate';
import { RegistreringsData } from '../rest/datatyper/registreringsData';
import useFetch from '../rest/use-fetch';
import {
    FnrFetchParams,
    HentVeilederFetchParams,
    lagHentAktorIdFetchInfo,
    lagHentCvFetchInfo, lagHentJobbsokerkompetanseFetchInfo,
    lagHentOppfolgingsstatusFetchInfo,
    lagHentPersonaliaFetchInfo,
    lagHentRegistreringFetchInfo, lagHentUnderOppfolgingFetchInfo,
    lagHentVeilederFetchInfo, lagHentYtelserFetchInfo
} from '../rest/api';
import { PersonaliaInfo } from '../rest/datatyper/personalia';
import { ArenaPerson } from '../rest/datatyper/arenaperson';
import { VeilederData } from '../rest/datatyper/veileder';
import { OppfolgingsstatusData } from '../rest/datatyper/oppfolgingsstatus';
import { KartleggingData } from '../rest/datatyper/kartlegging';
import { UnderOppfolgingData } from '../rest/datatyper/underOppfolgingData';
import { YtelseDataType } from '../rest/datatyper/ytelse';

function useFetchStore() {
    const registrering = useFetch<RegistreringsData, FnrFetchParams>(lagHentRegistreringFetchInfo);
    const personalia = useFetch<PersonaliaInfo, FnrFetchParams>(lagHentPersonaliaFetchInfo);
    const cvOgJobbprofil = useFetch<ArenaPerson, FnrFetchParams>(lagHentCvFetchInfo);
    const veileder = useFetch<VeilederData, HentVeilederFetchParams>(lagHentVeilederFetchInfo);
    const aktorId = useFetch<{aktorId: string}, FnrFetchParams>(lagHentAktorIdFetchInfo);
    const oppfolgingsstatus = useFetch<OppfolgingsstatusData, FnrFetchParams>(lagHentOppfolgingsstatusFetchInfo);
    const jobbsokerkompetanse = useFetch<KartleggingData, FnrFetchParams>(lagHentJobbsokerkompetanseFetchInfo);
    const ytelser = useFetch<YtelseDataType, FnrFetchParams>(lagHentYtelserFetchInfo);
    const underOppfolging = useFetch<UnderOppfolgingData, FnrFetchParams>(lagHentUnderOppfolgingFetchInfo);

    return {
        registrering, personalia, cvOgJobbprofil, veileder, aktorId,
        oppfolgingsstatus, jobbsokerkompetanse, ytelser, underOppfolging
    };
}

export const useFetchStoreContext = createUseContext(useFetchStore);
