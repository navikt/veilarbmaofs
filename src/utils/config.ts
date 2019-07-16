import React from 'react';
import CV from '../components/paneler/cv/cv';
import Jobbprofil from '../components/paneler/jobbprofil/jobbprofil';
import Personalia from '../components/paneler/personalia/personalia';
import YtelseVisning from '../components/paneler/ytelser/ytelsevisning';
import { Data, getData } from './fetch-utils';

import { ArenaPerson, createArenaPersonSourceConfig, CVFeilMelding, CVResponse, } from '../rest/datatyper/arenaperson';
import { createKartleggingDataSourceConfig, KartleggingData } from '../rest/datatyper/kartlegging';
import { createOppfolgingsstatusDataSourceConfig, OppfolgingsstatusData } from '../rest/datatyper/oppfolgingsstatus';
import { PersonaliaInfo } from '../rest/datatyper/personalia';
import { createRegistreringsDataSourceConfig, RegistreringsData } from '../rest/datatyper/registreringsData';
import { createYtelseDataSourceConfig, YtelseDataType } from '../rest/datatyper/ytelse';
import { erBrukerSykmeldt } from './arena-status-utils';
import Jobbsokerkompetanse from '../components/paneler/jobbsokerkompetanse/jobbsokerkompetanse';
import { Registrering } from '../components/paneler/registrering/registrering';
import { createOppfolgingDataSourceConfig, UnderOppfolgingData } from '../rest/datatyper/underOppfolgingData';
import Oppfolging from '../components/paneler/oppfolging/oppfolging';
import { Aktorid } from '../rest/datatyper/aktorid';

export type Datasource<T> =() => Promise<Data<T>>;

export interface InformasjonsElement<T> {
    component: React.ComponentType<{ data: T }>;
    dataSource: Datasource<T>;
    id: string;
}

export interface FetchContext {
    fnr: string;
}

export function getConfig(context: FetchContext, oppfolgingstatus: OppfolgingsstatusData): Array<InformasjonsElement<any>> {
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
            dataSource: getData<{
                    cv: CVResponse
                    oppfolging: UnderOppfolgingData
                    aktorId: Aktorid
                }>({
                    cv: createArenaPersonSourceConfig(context),
                    oppfolging: createOppfolgingDataSourceConfig(context),
                    aktorId:  `/veilarbperson/api/person/aktorid?fnr=${context.fnr}`,
                }),
            id: 'CV',
        },
        {
            component: Jobbprofil,
            dataSource: getData<{
                    jobbprofil: Pick<ArenaPerson, 'jobbprofil'>| CVFeilMelding
                    oppfolging: UnderOppfolgingData
                    aktorId: Aktorid
                }>({
                    jobbprofil: createArenaPersonSourceConfig(context),
                    oppfolging: createOppfolgingDataSourceConfig(context),
                    aktorId:  `/veilarbperson/api/person/aktorid?fnr=${context.fnr}`,
                }),
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
