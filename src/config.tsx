import { Data } from "./app/persondetaljer/datafetcher";
import CV from "./app/visningskomponenter/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker";
import Jobbsokerkompetanse from "./app/visningskomponenter/jobbsokerkompetanse";
import Oppfolging from "./app/visningskomponenter/oppfolging";
import Personalia from "./app/visningskomponenter/personalia";
import Registerering from "./app/visningskomponenter/registrering";
import Ytelser from "./app/visningskomponenter/ytelser";

export interface IInformasjonsElement {
    component: React.ComponentType<{data: Data[]}>;
    id: string;
    url: string[];
}

export type Config = IInformasjonsElement[];

export const elementer: Config = [
    {
        component: Registerering,
        id: 'Registrering',
        url: [
            '/veilarbregistrering/api/registrering'
        ],
    },
    {
        component: CV,
        id: 'CV',
        url: [
            '/pam/api'
        ]
    },
    {
        component: Jobbonsker,
        id: 'Jobbønsker',
        url: [
            '/veilarbregistrering/api/jobbonsker'
        ]
    },
    {
        component: Personalia,
        id: 'Personalia',
        url: [
            '/veilarbperson/api/',
            '/veilarbarena/api',
        ],
    },
    {
        component: Ytelser,
        id: 'Ytelser',
        url: [
            '/arena/api/pagaendeytelser'
        ],
    },
    {
        component: Oppfolging,
        id: 'Oppfølging',
        url: [
            '/veilarboppfolging/api/oppfolging'
        ],
    },
    {
        component: Jobbsokerkompetanse,
        id: 'Jobbsøkerkompetanse',
        url: [
            '/veilarbjobbsokerkompetanse/api/jobbsokerkompetanse'
        ],
    }
];