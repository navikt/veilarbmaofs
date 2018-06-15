import CV from "./app/visningskomponenter/cv/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker/jobbonsker";
import Jobbsokerkompetanse from "./app/visningskomponenter/jobbsokerkompetanse";
import Oppfolging, {OppfolgingData} from "./app/visningskomponenter/oppfolging/oppfolging";
import Personalia, {IPersonaliaInfo} from "./app/visningskomponenter/personalia/personalia";
import Registerering from "./app/visningskomponenter/registrering";
import Ytelser from "./app/visningskomponenter/ytelser";
import {Data, getData} from "./fetch-utils";

import { IRegistreringsData } from "./app/datatyper";
import {ArenaPerson} from "./app/datatyper/arenaperson";


export type Datasource<T> = () => Promise<Data<T>>;

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
         dataSource: getData<{ cv: ArenaPerson }>({
             // cv: '//app-t5.adeo.no/pam-arena/rest/arenaperson/hent?fnr=10108000398'
             cv: '/pam-arena'
         }),
         id: 'CV',
     },
     {
         component: Jobbonsker,
         dataSource: getData<{ jobbonsker: ArenaPerson }>({
             jobbonsker: '/pam-arena'
         }),
         id: 'Jobbønsker',
     },
     {
         component: Personalia,
         dataSource: getData<{ personalia: IPersonaliaInfo }>({
             personalia: '/veilarbperson/api/person/10108000398'
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
         dataSource: getData<{ oppfolging: OppfolgingData }>({
             oppfolging: `/veilarboppfolging/api/person/oppfolging/${context.fnr}/oppfolgingsstatus`,
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