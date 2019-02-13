import { FetchContext } from '../../config';

export interface Veileder {
    ident: string;
    enhet: {
        id: string;
        navn: string;
    };
}

export interface OrdinaerRegistrering {
    opprettetDato: string;
    teksterForBesvarelse: Sporsmal[];
    profilering?: Profilering;
    manueltRegistrertAv?: Veileder | null;
}

export interface SykmeldtRegistrering {
    opprettetDato: string;
    teksterForBesvarelse: Sporsmal[];
    manueltRegistrertAv?: Veileder | null;
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
