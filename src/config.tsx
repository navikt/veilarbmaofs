import CV from "./app/visningskomponenter/cv/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker";
import Jobbsokerkompetanse from "./app/visningskomponenter/jobbsokerkompetanse";
import Oppfolging from "./app/visningskomponenter/oppfolging";
import Personalia from "./app/visningskomponenter/personalia/personalia";
import Registerering from "./app/visningskomponenter/registrering";
import Ytelser from "./app/visningskomponenter/ytelser";
import { getData } from "./fetch-utils";

import { IRegistreringsData } from "./app/datatyper";


export type Datasource<T> = () => Promise<T>;

export interface IInformasjonsElement<T> {
    component: React.ComponentType<{ data: T }>;
    dataSource: Datasource<T>;
    id: string;
}

export interface IFetchContext {
    fnr: string;
}

export function getConfig(context: IFetchContext): Array<IInformasjonsElement<any>> {
 return [
     {
         component: Registerering,
         dataSource: getData<{ registering: IRegistreringsData }>({
             registering: '/veilarbregistrering/api/registrering'
         }),
         id: 'Registrering',
     },
     {
         component: CV,
         dataSource: getData<{ cv: IRegistreringsData }>({
             // cv: '//app-t5.adeo.no/pam-arena/rest/arenaperson/hent?fnr=10108000398'
             cv: '/pam-arena'
         }),
         id: 'CV',
     },
     {
         component: Jobbonsker,
         dataSource: getData<{ jobbonsker: IRegistreringsData }>({
             jobbonsker: '/veilarbregistrering/api/jobbonsker'
         }),
         id: 'Jobbønsker',
     },
     {
         component: Personalia,
         dataSource: getData<{ personalia: IRegistreringsData }>({
             personalia: '/veilarbperson/api/'
         }),
         id: 'Personalia',
     },
     {
         component: Ytelser,
         dataSource: getData<{ ytelser: IRegistreringsData }>({
             ytelser: '/arena/api/pagaendeytelser'
         }),
         id: 'Ytelser',
     },
     {
         component: Oppfolging,
         dataSource: getData<{ oppfolging: IRegistreringsData }>({
             oppfolging: `/veilarboppfolging/api/person/oppfolging/${context.fnr}/oppfolgingsstatus`
         }),
         id: 'Oppfølging',
     },
     {
         component: Jobbsokerkompetanse,
         dataSource: getData<{ jobbsokerkompetanse: IRegistreringsData }>({
             jobbsokerkompetanse: '/veilarbjobbsokerkompetanse/api/jobbsokerkompetanse'
         }),
         id: 'Jobbsøkerkompetanse',
     }
 ];
}