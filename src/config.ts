import CV from "./app/visningskomponenter/cv/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker/jobbonsker";
import Jobbsokerkompetanse, {KartleggingData} from "./app/visningskomponenter/jobbsokerkompetanse/jobbsokerkompetanse";
import Oppfolging, {OppfolgingData} from "./app/visningskomponenter/oppfolging/oppfolging";
import Personalia, {IPersonaliaInfo} from "./app/visningskomponenter/personalia/personalia";
import Ytelser from "./app/visningskomponenter/ytelser/ytelser";
import {Data, getData} from "./fetch-utils";

import { IRegistreringsData } from "./app/datatyper";
import {ArenaPerson} from "./app/datatyper/arenaperson";


export type Datasource<T> = () => Promise<Data<T>>;
export type VisningKomponent<T = {}> = React.ComponentType<{ data: T}> & { placeholder?: React.ComponentType };

export interface IInformasjonsElement<T> {
    component: VisningKomponent<T>;
    dataSource: Datasource<T>;
    id: string;
}

export interface IFetchContext {
    fnr: string;
}

export function getConfig(context: IFetchContext): Array<IInformasjonsElement<any>> {
 return [
     {
         component: CV,
         dataSource: getData<{ cv: ArenaPerson }>({
             cv: `/pam-arena/rest/arenaperson/hentForFnr?fnr=${context.fnr}`
         }),
         id: 'CV',
     },
     {
         component: Jobbonsker,
         dataSource: getData<{ jobbonsker: ArenaPerson }>({
             jobbonsker: `/pam-arena/rest/arenaperson/hentForFnr?fnr=${context.fnr}`
         }),
         id: 'Jobbønsker',
     },
     {
         component: Personalia,
         dataSource: getData<{ personalia: IPersonaliaInfo }>({
             personalia: `/veilarbperson/api/person/${context.fnr}`
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
         dataSource: getData<{ jobbsokerkompetanse: KartleggingData }>({
             jobbsokerkompetanse: `/veilarbjobbsokerkompetanse/api/hent?fnr=${context.fnr}`
         }),
         id: 'Jobbsøkerkompetanse',
     }
 ];
}