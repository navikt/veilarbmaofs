import {OrNothing} from "../visningskomponenter/felles-typer";

interface SvarAlternativ {
    svarAlternativKey: string;
    svarAlternativ: string;
}

interface Besvarelse {
    sporsmal: string;
    sporsmalKey: string;
    svarAlternativer: SvarAlternativ[];
    tips: OrNothing<string>;
    tipsKey: OrNothing<string>;
}

export interface RaadAktivitet {
    tittel: string;
    innhold: string;
}

export interface Raad {
    raadKey: string;
    raadTittel: string;
    raadIngress: string;
    raadAktiviteter: RaadAktivitet[];
}

interface Kulepunkt {
    kulepunktKey: string;
    kulepunktPrioritet: number;
    kulepunkt: string;
}

export interface KartleggingData {
    besvarelse: Besvarelse[];
    besvarelseDato: OrNothing<string>;
    kulepunkter: Kulepunkt[];
    oppsummering: OrNothing<string>;
    oppsummeringKey: OrNothing<string>;
    raad: Raad[];
    underOppfolging: OrNothing<boolean>;
}
