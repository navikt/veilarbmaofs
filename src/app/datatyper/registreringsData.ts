import { FetchContext } from '../../config';

export interface Veileder {
    ident: string;
    enhet: {
        id: string;
        navn: string;
    };
}

interface RegistreringBase {
    opprettetDato: string;
    teksterForBesvarelse: Sporsmal[];
    manueltRegistrertAv?: Veileder | null;
}

export interface OrdinaerRegistrering extends RegistreringBase {
    profilering?: Profilering;
}

export type SykmeldtRegistrering = RegistreringBase;

export interface Profilering {
    jobbetSammenhengendeSeksAvTolvSisteManeder: boolean;
}

export type RegistreringType = 'ORDINAER' | 'SYKMELDT';

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
