/* tslint:disable */
import {FetchContext} from "../../utils/config";
import {SourceConfigEntry} from "../../utils/fetch-utils";

export interface UnderOppfolgingData {
    underOppfolging: boolean;
    erManuell: boolean;
}


export function createOppfolgingDataSourceConfig(context: FetchContext): SourceConfigEntry<UnderOppfolgingData> {
    return {
        allwaysUseFallback: true,
        fallback: {
            underOppfolging: false,
            erManuell: false
        },
        url: `/veilarboppfolging/api/underoppfolging?fnr=${context.fnr}`
    };
}
