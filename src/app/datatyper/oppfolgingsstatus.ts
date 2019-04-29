import { FetchContext } from '../../config';
import { SourceConfigEntry } from '../../fetch-utils';
import { OrNothing, StringOrNothing } from '../visningskomponenter/felles-typer';

export interface OppfolgingEnhet {
    navn: StringOrNothing;
    enhetId: StringOrNothing;
}
export type Formidlingsgruppe = 'ARBS' | 'IARBS' | 'ISERV' | 'PARBS' | 'RARBS';
export type Servicegruppe = 'BKART' | 'IVURD' | 'OPPFI' | 'VARIG' | 'VURDI' | 'VURDU';
export type Hovedmaalgruppe = 'OKEDELT' | 'SKAFFEA ' | 'BEHOLDEA';
export const HovedmaalkodeMap = {
    OKEDELT: 'Øke deltakelse eller mål om arbeid',
    SKAFFEA: 'Skaffe arbeid',
    BEHOLDEA: 'Beholde arbeid'
};

export interface OppfolgingsstatusData {
    oppfolgingsenhet: OppfolgingEnhet;
    veilederId: StringOrNothing;
    formidlingsgruppe: OrNothing<Formidlingsgruppe>;
    servicegruppe: OrNothing<Servicegruppe>;
    hovedmaalkode: OrNothing<Hovedmaalgruppe>;
}

export function createOppfolgingsstatusDataSourceConfig(context: FetchContext): SourceConfigEntry<OppfolgingsstatusData> {
    return {
        allwaysUseFallback: true,
        fallback: {
            formidlingsgruppe: null,
            oppfolgingsenhet: {
                enhetId: null,
                navn: null
            },
            servicegruppe: null,
            veilederId: null,
            hovedmaalkode: null
        },
        url: `/veilarboppfolging/api/person/${context.fnr}/oppfolgingsstatus`
    };
}