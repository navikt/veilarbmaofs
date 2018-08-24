import CV from "./app/visningskomponenter/cv/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker/jobbonsker";
import Oppfolging from "./app/visningskomponenter/oppfolging/oppfolging";
import Personalia from "./app/visningskomponenter/personalia/personalia";
import YtelseVisning from "./app/visningskomponenter/ytelser/ytelsevisning";
import {Data, getData} from "./fetch-utils";

import {ArenaPerson, createArenaPersonSourceConfig} from "./app/datatyper/arenaperson";
import {KartleggingData} from "./app/datatyper/kartlegging";
import {createOppfolgingDataSourceConfig, OppfolgingData} from "./app/datatyper/oppfolging";
import {PersonaliaInfo} from "./app/datatyper/personalia";
import {YtelseDataType} from "./app/datatyper/ytelse";
import Jobbsokerkompetanse from "./app/visningskomponenter/jobbsokerkompetanse/jobbsokerkompetanse";

export type Datasource<T> = () => Promise<Data<T>>;

export interface IInformasjonsElement<T> {
    component: React.ComponentType<{ data: T }>;
    dataSource: Datasource<T>;
    id: string;
}

export interface FetchContext {
    fnr: string;
}

export function getConfig(context: FetchContext): Array<IInformasjonsElement<any>> {
    return [
        {
            component: CV,
            dataSource: getData<{ cv: ArenaPerson }>({
                cv: createArenaPersonSourceConfig(context)
            }),
            id: 'CV',
        },
        {
            component: Jobbonsker,
            dataSource: getData<{ jobbonsker: ArenaPerson }>({
                jobbonsker: createArenaPersonSourceConfig(context)
            }),
            id: 'Jobbønsker',
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
                ytelser: `/veilarboppfolging/api/person/${context.fnr}/ytelser`
            }),
            id: 'Ytelser',
        },
        {
            component: Oppfolging,
            dataSource: getData<{
                oppfolging: OppfolgingData,
                personalia: PersonaliaInfo,
                ytelser: YtelseDataType
            }>({
                oppfolging: createOppfolgingDataSourceConfig(context),
                personalia: `/veilarbperson/api/person/${context.fnr}`,
                ytelser: `/veilarboppfolging/api/person/${context.fnr}/ytelser`
            }),
            id: 'Oppfølging',
        },
        {
            component: Jobbsokerkompetanse,
            dataSource: getData<{ jobbsokerkompetanse: KartleggingData }>({
                jobbsokerkompetanse: {
                    fallback: {
                        besvarelse: [],
                        besvarelseDato: null,
                        kulepunkter: [],
                        oppsummering: null,
                        oppsummeringKey: null,
                        raad: [],
                        underOppfolging: null,
                    },
                    url: `/veilarbjobbsokerkompetanse/api/hent?fnr=${context.fnr}`
                }
            }),
            id: 'Jobbsøkerkompetanse',
        }
    ];
}
