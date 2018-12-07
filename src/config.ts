import CV from "./app/visningskomponenter/cv/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker/jobbonsker";
import Oppfolging from "./app/visningskomponenter/oppfolging/oppfolging";
import Personalia from "./app/visningskomponenter/personalia/personalia";
import YtelseVisning from "./app/visningskomponenter/ytelser/ytelsevisning";
import {Data, getData} from "./fetch-utils";

import {ArenaPerson, createArenaPersonSourceConfig} from "./app/datatyper/arenaperson";
import {createKartleggingDataSourceConfig, KartleggingData} from "./app/datatyper/kartlegging";
import {createOppfolgingDataSourceConfig, OppfolgingData} from "./app/datatyper/oppfolging";
import {PersonaliaInfo} from "./app/datatyper/personalia";
import {createRegistreringsDataSourceConfig, RegistreringsData} from "./app/datatyper/registreringsData";
import {createYtelseDataSourceConfig, YtelseDataType} from "./app/datatyper/ytelse";
import {Feature} from "./app/persondetaljer";
import {erBrukerSykmeldt} from "./app/utils/arena-status-utils";
import Jobbsokerkompetanse from "./app/visningskomponenter/jobbsokerkompetanse/jobbsokerkompetanse";
import {Registrering} from "./app/visningskomponenter/registrering/registrering";

export type Datasource<T> = () => Promise<Data<T>>;

export interface IInformasjonsElement<T> {
    component: React.ComponentType<{ data: T }>;
    dataSource: Datasource<T>;
    id: string;
}

export interface FetchContext {
    fnr: string;
}

export function getConfig(context: FetchContext, feature: Feature, oppfolging: OppfolgingData): Array<IInformasjonsElement<any>> {
    const bolker = [
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
                ytelser: createYtelseDataSourceConfig(context)
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

    if (feature["mao.vise_registrering"]) {
        const registrering = {
            component: Registrering,
            dataSource: getData<{ registrering: RegistreringsData}>({
                registrering: createRegistreringsDataSourceConfig(context)
            }),
            id: erBrukerSykmeldt(oppfolging) ? 'Overgang fra sykefravær' : 'Registrering',
        };

        return  [ registrering, ...bolker ];
    }

    return bolker;
}
