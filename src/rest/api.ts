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
import { PersonaliaV2Info } from './datatyper/personaliav2';
import { TOGGLES, Features } from './datatyper/feature';
import { VergeOgFullmaktData} from "./datatyper/vergeOgFullmakt";
import { TilrettelagtKommunikasjonData} from "./datatyper/tilrettelagtKommunikasjon";
import { Innsatsbehov } from './datatyper/innsatsbehov';
import { APP_NAME } from '../utils/konstanter';

const headers = {
	headers: { 'Nav-Consumer-Id': APP_NAME }
};

export const useFetchRegistrering = (fnr: string) =>
	useFetch<RegistreringsData>(`/veilarbregistrering/api/registrering?fnr=${fnr}`, headers);

export const useFetchCvOgJobbprofil = (fnr: string) => useFetch<ArenaPerson>(`/veilarbperson/api/person/cv_jobbprofil?fnr=${fnr}`);

export const useFetchVeileder = (veilederId: OrNothing<string>, config?: Config) =>
	useFetch<VeilederData>(`/veilarbveileder/api/veileder/${veilederId}`, headers, config);

export const useFetchAktorId = (fnr: string) => useFetch<AktorId>(`/veilarbperson/api/person/aktorid?fnr=${fnr}`, headers);

export const useFetchOppfolgingsstatus = (fnr: string) =>
	useFetch<OppfolgingsstatusData>(`/veilarboppfolging/api/person/${fnr}/oppfolgingsstatus`, headers);

export const useFetchJobbsokerkompetanse = (fnr: string) =>
	useFetch<KartleggingData>(`/veilarbjobbsokerkompetanse/api/hent?fnr=${fnr}`, headers);

export const useFetchYtelser = (fnr: string) => useFetch<YtelseData>(`/veilarboppfolging/api/person/${fnr}/ytelser`, headers);

export const useFetchUnderOppfolging = (fnr: string) =>
	useFetch<UnderOppfolgingData>(`/veilarboppfolging/api/underoppfolging?fnr=${fnr}`, headers);

export const useFetchPersonalia = (fnr: string) => useFetch<PersonaliaInfo>(`/veilarbperson/api/person/${fnr}`, headers);

export const useFetchPersonaliaV2 = (fnr: string) => useFetch<PersonaliaV2Info>(`/veilarbperson/api/v2/person?fnr=${fnr}`, headers);

export const useFetchVergOgFullmakt = (fnr: string) => useFetch<VergeOgFullmaktData>(`/veilarbperson/api/v2/person/vergeOgFullmakt?fnr=${fnr}`, headers);

export const useFetchSpraakTolk = (fnr: string) => useFetch<TilrettelagtKommunikasjonData>(`/veilarbperson/api/v2/person/tolk?fnr=${fnr}`, headers);

export const useFetchInnsatsbehov = (fnr: string) =>
	useFetch<Innsatsbehov>(`/veilarbvedtaksstotte/api/innsatsbehov?fnr=${fnr}`, headers);

const toggles = TOGGLES.map(element => 'feature=' + element).join('&');

export const useFetchFeatureToggle = () => useFetch<Features>(`/veilarbpersonflatefs/api/feature?${toggles}`, headers);
