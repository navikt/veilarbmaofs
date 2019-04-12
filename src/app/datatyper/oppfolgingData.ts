/* tslint:disable */
import {FetchContext} from "../../config";
import {SourceConfigEntry} from "../../fetch-utils";

export interface OppfolgingData {
    underOppfolging: boolean;
}


export function createOppfolgingDataSourceConfig(context: FetchContext): SourceConfigEntry<OppfolgingData> {
    return {
        allwaysUseFallback: true,
        fallback: {
            underOppfolging: false
        },
        url: `/veilarboppfolging/api/oppfolging?fnr=${context.fnr}`
    };
}