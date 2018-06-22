import {StringOrNull} from "../visningskomponenter/felles-typer";

interface Verv {
    fraDato: string;
    tilDato: string;
    organisasjon: string;
    tittel: string;
}

interface Utdanning {
    fraDato: string;
    tilDato: string;
    utdannelsessted: string;
    alternativtUtdanningsnavn: string;
    nusKode: string;
    nusKodeUtdanningsnavn: string;
}

interface Yrkeserfaring {
    fraDato: string;
    tilDato: string;
    styrkKode: string;
    styrkKodeStillingstittel: string;
    utelukketForFremtiden: boolean;
    arbeidsgiver: string;
    alternativStillingstittel: string;
}

interface Sertifikat {
    fraDato: string;
    tilDato: StringOrNull
    sertifikatKode: string;
    sertifikatKodeNavn: string;
    alternativtNavn: StringOrNull;
    utsteder: string;
}

interface Kompetanse {
    fraDato: string;
    beskrivelse: StringOrNull
    alternativTekst: StringOrNull
    kompetanseKode: string;
    kompetanseKodeTekst: string;
}

export interface GeografiJobbonsker {
    geografiKodeTekst: string;
    geografiKode: string;
}

export interface YrkeJobbonsker {
    styrkKode: string;
    styrkBeskrivelse: string;
    primaertJobbonske: boolean;
}

export interface HeltidDeltidJobbonsker {
    heltidDeltidKode: string;
    heltidDeltidKodeTekst: string;
}

export interface AnsettelsesforholdJobbonsker {
    ansettelsesforholdKodeTekst: string;
    ansettelsesforholdKode: string;
}

export interface ArbeidstidsordningJobbonsker {
    arbeidstidsordningKode: string;
    arbeidstidsordningKodeTekst: string;
}

interface Kurs {
    fraDato: string;
    tilDato: StringOrNull
    tittel: string;
    arrangor: string;
    omfang: {
        verdi: number
        enhet: StringOrNull
    }
}

export interface ArenaPerson {
    personId: number;
    fodselsdato: string;
    fodselsnummer: string;
    erFodselsnummerDnr: boolean;
    formidlingsgruppekode: string;
    etternavn: string;
    fornavn: string;
    statsborgerskap: string;
    samtykkeDato: string;
    samtykkeStatus: string;
    disponererBil: boolean;
    verv: Verv[];
    beskrivelse: StringOrNull;
    kandidatnummer: StringOrNull
    sistEndret: string;
    adresse: {
        landkode: string;
        postnr: string;
        poststednavn: string;
        kommunenr: number;
        adrlinje1: string;
        adrlinje2: StringOrNull
        adrlinje3: StringOrNull
    };
    utdanning: Utdanning[];
    yrkeserfaring: Yrkeserfaring[];
    forerkort: Sertifikat[];
    sertifikater: Sertifikat[];
    sprak: Kompetanse[];
    kompetanse: Kompetanse[];
    geografiJobbonsker: GeografiJobbonsker[];
    yrkeJobbonsker: YrkeJobbonsker[];
    heltidDeltidJobbonsker: HeltidDeltidJobbonsker[];
    ansettelsesforholdJobbonsker: AnsettelsesforholdJobbonsker[];
    arbeidstidsordningJobbonsker: ArbeidstidsordningJobbonsker[];
    epost: StringOrNull
    kurs: Kurs[]
}