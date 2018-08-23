import {StringOrNothing} from "../visningskomponenter/felles-typer";

export interface RegistreringsData {
    id: number,
    opprettetDato: string,
    enigIOppsummering: boolean,
    oppsummering: StringOrNothing,
    teksterForBesvarelse: Sporsmal[],
}

export interface Sporsmal {
    sporsmalId: string,
    sporsmal: string,
    svar: string
}
