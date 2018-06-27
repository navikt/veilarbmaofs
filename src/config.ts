import CV from "./app/visningskomponenter/cv/cv";
import Jobbonsker from "./app/visningskomponenter/jobbonsker/jobbonsker";
import Jobbsokerkompetanse from "./app/visningskomponenter/jobbsokerkompetanse/jobbsokerkompetanse";
import Oppfolging, {OppfolgingData} from "./app/visningskomponenter/oppfolging/oppfolging";
import Personalia, {PersonaliaInfo} from "./app/visningskomponenter/personalia/personalia";
import YtelseVisning, {YtelseDataType} from "./app/visningskomponenter/ytelser/ytelsevisning";
import {Data, getData} from "./fetch-utils";

import {ArenaPerson} from "./app/datatyper/arenaperson";
import {KartleggingData} from "./app/datatyper/kartlegging";

export type Datasource<T> = () => Promise<Data<T>>;
export type VisningKomponent<T = {}> = React.ComponentType<{ data: T}> & { placeholder?: React.ComponentType };

export interface IInformasjonsElement<T> {
    component: VisningKomponent<T>;
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