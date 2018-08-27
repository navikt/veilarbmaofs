import {FetchContext} from "../../config";

export interface RegistreringsData {
    opprettetDato?: string,
    teksterForBesvarelse: Sporsmal[],
}

export interface Sporsmal {
    sporsmalId: string,
    sporsmal: string,
    svar: string
}

export function createRegistreringsDataSourceConfig(context: FetchContext) {
    return {
        fallback: {
            teksterForBesvarelse: [],
        },
        url: `/veilarbregistrering/api/registrering?fnr=${context.fnr}`
    };
}
