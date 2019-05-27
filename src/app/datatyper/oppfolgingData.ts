/* tslint:disable */
import {FetchContext} from "../../config";
import {SourceConfigEntry} from "../../fetch-utils";

export interface OppfolgingData {
    underOppfolging: boolean;
    erManuell: boolean;
}


export function createOppfolgingDataSourceConfig(context: FetchContext): SourceConfigEntry<OppfolgingData> {
    return {
        allwaysUseFallback: true,
        fallback: {
            underOppfolging: false,
            erManuell: false
        },
        url: `/veilarboppfolging/api/underoppfolging?fnr=${context.fnr}`
    };
}