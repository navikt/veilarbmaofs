import {FetchContext} from "../../config";
import {SourceConfigEntry} from "../../fetch-utils";
import {OrNothing, StringOrNothing} from "../visningskomponenter/felles-typer";

export interface OppfolgingEnhet {
    navn: StringOrNothing;
    enhetId: StringOrNothing;
}
export type Formidlingsgruppe = 'ARBS' | 'IARBS' | 'ISERV' | 'PARBS' | 'RARBS';
export type Servicegruppe = 'BKART' | 'IVURD' | 'OPPFI' | 'VARIG' | 'VURDI' | 'VURDU';

export interface OppfolgingData {
    oppfolgingsenhet: OppfolgingEnhet,
    veilederId: StringOrNothing;
    formidlingsgruppe: OrNothing<Formidlingsgruppe>;
    servicegruppe: OrNothing<Servicegruppe>;
}

export function createOppfolgingDataSourceConfig(context: FetchContext): SourceConfigEntry<OppfolgingData> {
    return {
        fallback: {
            formidlingsgruppe: null,
            oppfolgingsenhet: {
                enhetId: null,
                navn: null
            },
            servicegruppe: null,
            veilederId: null
        },
        url: `/veilarboppfolging/api/person/${context.fnr}/oppfolgingsstatus`
    };
}
