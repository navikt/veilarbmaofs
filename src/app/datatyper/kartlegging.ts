interface SvarAlternativ {
    svarAlternativKey: string;
    svarAlternativ: string;
}

interface Besvarelse {
    sporsmal: string;
    sporsmalKey: string;
    svarAlternativer: SvarAlternativ[];
    tips?: string;
    tipsKey?: string;
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
    besvarelseDato: string;
    kulepunkter: Kulepunkt[];
    oppsummering: string;
    oppsummeringKey: string;
    raad: Raad[];
    underOppfolging: boolean;

}