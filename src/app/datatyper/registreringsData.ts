import { FetchContext } from '../../config';

export interface OrdinaerRegistrering {
    opprettetDato: string;
    teksterForBesvarelse: Sporsmal[];
    profilering?: Profilering;
}

export interface SykmeldtRegistrering {
    opprettetDato: string;
    teksterForBesvarelse: Sporsmal[];
}

export interface Profilering {
    jobbetSammenhengendeSeksAvTolvSisteManeder: boolean;
}

export enum RegistreringType {
    ORDINAER = 'ORDINAER',
    SYKMELDT = 'SYKMELDT'
}

export type Registrering = OrdinaerRegistrering | SykmeldtRegistrering;

export interface RegistreringsData {
    type?: RegistreringType;
    registrering?: Registrering;
    profilering?: Profilering; // TODO: profilering skal flyttes til OrdinaerRegistrering, dette feltet er kun midlertidig
}

export interface Sporsmal {
    sporsmalId: string;
    sporsmal: string;
    svar: string;
}

export function createRegistreringsDataSourceConfig(context: FetchContext) {
    return {
        fallback: {
        },
        url: `/veilarbregistrering/api/registrering?fnr=${context.fnr}`
    };
}
