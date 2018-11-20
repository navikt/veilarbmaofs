import {FetchContext} from "../../config";

export interface Registrering {
    opprettetDato: string,
    teksterForBesvarelse: Sporsmal[],
    profilering?: Profilering,
}
export interface Profilering {
    jobbetSammenhengendeSeksAvTolvSisteManeder: boolean
}
export interface RegistreringsData {
    registrering?: Registrering,
    profilering?: Profilering, // TODO: profilering skal flyttes til Registrering, dette feltet er kun midlertidig
}

export interface Sporsmal {
    sporsmalId: string,
    sporsmal: string,
    svar: string
}

export function createRegistreringsDataSourceConfig(context: FetchContext) {
    return {
        fallback: {
        },
        url: `/veilarbregistrering/api/registrering?fnr=${context.fnr}`
    };
}
