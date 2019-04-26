import * as React from 'react';
import CV from './app/visningskomponenter/cv/cv';
import Jobbprofil from './app/visningskomponenter/jobbprofil/jobbprofil';
import Personalia from './app/visningskomponenter/personalia/personalia';
import YtelseVisning from './app/visningskomponenter/ytelser/ytelsevisning';
import { Data, getData } from './fetch-utils';

import { ArenaPerson, createArenaPersonSourceConfig, CVFeilMelding, CVResponse, } from './app/datatyper/arenaperson';
import { createKartleggingDataSourceConfig, KartleggingData } from './app/datatyper/kartlegging';
import { createOppfolgingsstatusDataSourceConfig, OppfolgingsstatusData } from './app/datatyper/oppfolgingsstatus';
import { PersonaliaInfo } from './app/datatyper/personalia';
import { createRegistreringsDataSourceConfig, RegistreringsData } from './app/datatyper/registreringsData';
import { createYtelseDataSourceConfig, YtelseDataType } from './app/datatyper/ytelse';
import { erBrukerSykmeldt } from './app/utils/arena-status-utils';
import Jobbsokerkompetanse from './app/visningskomponenter/jobbsokerkompetanse/jobbsokerkompetanse';
import { Registrering } from './app/visningskomponenter/registrering/registrering';
import { createOppfolgingDataSourceConfig, OppfolgingData } from './app/datatyper/oppfolgingData';
import Oppfolging from './app/visningskomponenter/oppfolging/oppfolging';
import { Aktorid } from './app/datatyper/aktorid';

export type Datasource<T> =() => Promise<Data<T>>;

export interface InformasjonsElement<T> {
    component: React.ComponentType<{ data: T }>;
    dataSource: Datasource<T>;
    id: string;
}

export interface FetchContext {
    fnr: string;
}

export function getConfig(context: FetchContext, oppfolgingstatus: OppfolgingsstatusData, oppfolging: OppfolgingData): Array<InformasjonsElement<any>> {
    return [
        {
            component: Registrering,
            dataSource: getData<{ registrering: RegistreringsData}>({
                registrering: createRegistreringsDataSourceConfig(context)
            }),
            id: erBrukerSykmeldt(oppfolgingstatus) ? 'Registrering fra sykefravær' : 'Registrering',
        },
        {
            component: CV,
            dataSource: oppfolging.underOppfolging
                ? getData<{
                    cv: CVResponse
                    oppfolging: OppfolgingData
                    aktorId: Aktorid
                }>({
                    cv: createArenaPersonSourceConfig(context),
                    oppfolging: createOppfolgingDataSourceConfig(context),
                    aktorId:  `/veilarbperson/api/person/aktorid?fnr=${context.fnr}`
                })
                : () =>  Promise.resolve({cv: CVFeilMelding.IKKE_UNDER_OPPFOLGING}),
            id: 'CV',
        },
        {
            component: Jobbprofil,
            dataSource: oppfolging.underOppfolging
                ? getData<{
                    jobbprofil: Pick<ArenaPerson, 'jobbprofil'>| CVFeilMelding
                    oppfolging: OppfolgingData
                    aktorId: Aktorid
                }>({
                    jobbprofil: createArenaPersonSourceConfig(context),
                    oppfolging: createOppfolgingDataSourceConfig(context),
                    aktorId:  `/veilarbperson/api/person/aktorid?fnr=${context.fnr}`})
                : () => Promise.resolve({jobbprofil: CVFeilMelding.IKKE_UNDER_OPPFOLGING}),
            id: 'Jobbprofil',
        },
        {
            component: Personalia,
            dataSource: getData<{ personalia: PersonaliaInfo }>({
                personalia: `/veilarbperson/api/person/${context.fnr}`
            }),
            id: 'Personalia',
        },
        {
            component: YtelseVisning,
            dataSource: getData<{ ytelser: YtelseDataType }>({
                ytelser: createYtelseDataSourceConfig(context)
            }),
            id: 'Ytelser',
        },
        {
            component: Oppfolging,
            dataSource: getData<{
                oppfolging: OppfolgingsstatusData,
                personalia: PersonaliaInfo,
                ytelser: YtelseDataType
            }>({
                oppfolging: createOppfolgingsstatusDataSourceConfig(context),
                personalia: `/veilarbperson/api/person/${context.fnr}`,
                ytelser: createYtelseDataSourceConfig(context)
            }),
            id: 'Oppfølging',
        },
        {
            component: Jobbsokerkompetanse,
            dataSource: getData<{ jobbsokerkompetanse: KartleggingData }>({
                jobbsokerkompetanse: createKartleggingDataSourceConfig(context)
            }),
            id: 'Jobbsøkerkompetanse',
        }
    ];
}
