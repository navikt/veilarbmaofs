import CV, { ICVData } from './app/visningskomponenter/cv';
import Jobbonsker, { IJobbonskerData } from './app/visningskomponenter/jobbonsker';
import Jobbsokerkompetanse, { IKompetanseData } from './app/visningskomponenter/jobbsokerkompetanse';
import Oppfolging, { IOppfolgingData } from './app/visningskomponenter/oppfolging';
import Personalia, {IPersonaliaData} from "./app/visningskomponenter/personalia";
import Registerering, { IRegistereringData } from './app/visningskomponenter/registrering';
import Ytelser, { IYtelserData } from './app/visningskomponenter/ytelser';
import { getData } from "./fetch-utils";


export interface IInformasjonsElement<T> {
    component: React.ComponentType<{ data: T }>;
    dataSource: () => Promise<T>;
    id: string;
}

export type Config = Array<IInformasjonsElement<any>>;
export const elementer: Config = [
    {
        component: Registerering,
        dataSource: getData<IRegistereringData>({
            registering: '/veilarbregistrering/api/registrering'
        }),
        id: 'Registrering',
    },
    {
        component: CV,
        dataSource: getData<ICVData>({
            cv: '/arenapam/api/cv'
        }),
        id: 'CV',
    },
    {
        component: Jobbonsker,
        dataSource: getData<IJobbonskerData>({
            jobbonsker: '/veilarbregistrering/api/jobbonsker'
        }),
        id: 'Jobbønsker',
    },
    {
        component: Personalia,
        dataSource: getData<IPersonaliaData>({
            arena: '/veilarbarena/api',
            tps: '/veilarbperson/api/',
        }),
        id: 'Personalia',
    },
    {
        component: Ytelser,
        dataSource: getData<IYtelserData>({
            ytelser: '/arena/api/pagaendeytelser'
        }),
        id: 'Ytelser',
    },
    {
        component: Oppfolging,
        dataSource: getData<IOppfolgingData>({
            oppfolging: '/veilarboppfolging/api/oppfolging'
        }),
        id: 'Oppfølging',
    },
    {
        component: Jobbsokerkompetanse,
        dataSource: getData<IKompetanseData>({
            jobbsokerkompetanse: '/veilarbjobbsokerkompetanse/api/jobbsokerkompetanse'
        }),
        id: 'Jobbsøkerkompetanse',
    }
];
