import useFetch, { Config } from '@nutgaard/use-fetch';
import { PersonaliaInfo } from './datatyper/personalia';
import { RegistreringsData } from './datatyper/registreringsData';
import { ArenaPerson } from './datatyper/arenaperson';
import { VeilederData } from './datatyper/veileder';
import { AktorId } from './datatyper/aktor-id';
import { OppfolgingsstatusData } from './datatyper/oppfolgingsstatus';
import { KartleggingData } from './datatyper/kartlegging';
import { YtelseData } from './datatyper/ytelse';
import { UnderOppfolgingData } from './datatyper/underOppfolgingData';
import { OrNothing } from '../utils/felles-typer';
import { Situasjon } from './datatyper/situasjonData';

export const useFetchRegistrering = (fnr: string) =>
	useFetch<RegistreringsData>(`/veilarbregistrering/api/registrering?fnr=${fnr}`);

export const useFetchSituasjon = (fnr: string) =>
	useFetch<Situasjon[]>(`/veilarbvedtakinfo/api/situasjonHistorikk?fnr=${fnr}`);

export const useFetchCvOgJobbprofil = (fnr: string) => useFetch<ArenaPerson>(`/pam-cv-api/rest/v1/arbeidssoker/${fnr}`);

export const useFetchVeileder = (veilederId: OrNothing<string>, config?: Config) =>
	useFetch<VeilederData>(`/veilarbveileder/api/veileder/${veilederId}`, {}, config);

export const useFetchAktorId = (fnr: string) => useFetch<AktorId>(`/veilarbperson/api/person/aktorid?fnr=${fnr}`);

export const useFetchOppfolgingsstatus = (fnr: string) =>
	useFetch<OppfolgingsstatusData>(`/veilarboppfolging/api/person/${fnr}/oppfolgingsstatus`);

export const useFetchJobbsokerkompetanse = (fnr: string) =>
	useFetch<KartleggingData>(`/veilarbjobbsokerkompetanse/api/hent?fnr=${fnr}`);

export const useFetchYtelser = (fnr: string) => useFetch<YtelseData>(`/veilarboppfolging/api/person/${fnr}/ytelser`);

export const useFetchUnderOppfolging = (fnr: string) =>
	useFetch<UnderOppfolgingData>(`/veilarboppfolging/api/underoppfolging?fnr=${fnr}`);

export const useFetchPersonalia = (fnr: string) => useFetch<PersonaliaInfo>(`/veilarbperson/api/person/${fnr}`);
