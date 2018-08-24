export interface RegistreringsData {
    opprettetDato?: string,
    teksterForBesvarelse: Sporsmal[],
}

export interface Sporsmal {
    sporsmalId: string,
    sporsmal: string,
    svar: string
}
