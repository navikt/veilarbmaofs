import {FetchContext} from "../../config";
import {SourceConfigEntry} from "../../fetch-utils";
import {OrNothing, StringOrNothing} from "../visningskomponenter/felles-typer";

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
    tilDato: StringOrNothing
    sertifikatKode: string;
    sertifikatKodeNavn: string;
    alternativtNavn: StringOrNothing;
    utsteder: string;
}

interface Kompetanse {
    fraDato: string;
    beskrivelse: StringOrNothing
    alternativTekst: StringOrNothing
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
    tilDato: StringOrNothing
    tittel: string;
    arrangor: string;
    omfang: {
        verdi: number
        enhet: StringOrNothing
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
    disponererBil: OrNothing<boolean>;
    verv: Verv[];
    beskrivelse: StringOrNothing;
    kandidatnummer: StringOrNothing
    sistEndret: StringOrNothing;
    adresse: {
        landkode: string;
        postnr: string;
        poststednavn: string;
        kommunenr: number;
        adrlinje1: string;
        adrlinje2: StringOrNothing
        adrlinje3: StringOrNothing
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
    epost: StringOrNothing
    kurs: Kurs[]
}

export function createArenaPersonSourceConfig(context: FetchContext): SourceConfigEntry<ArenaPerson> {
    return {
        fallback: {
            personId: -1,
            fodselsdato: "",
            fodselsnummer: "",
            erFodselsnummerDnr: false,
            formidlingsgruppekode: "",
            etternavn: "",
            fornavn: "",
            statsborgerskap: "",
            samtykkeDato: "",
            samtykkeStatus: "",
            disponererBil: null,
            verv: [],
            beskrivelse: null,
            kandidatnummer: null,
            sistEndret: null,
            adresse: {
                landkode: "",
                postnr: "",
                poststednavn: "",
                kommunenr: -1,
                adrlinje1: "",
                adrlinje2: null,
                adrlinje3: null
            },
            utdanning: [],
            yrkeserfaring: [],
            forerkort: [],
            sertifikater: [],
            sprak: [],
            kompetanse: [],
            geografiJobbonsker: [],
            yrkeJobbonsker: [],
            heltidDeltidJobbonsker: [],
            ansettelsesforholdJobbonsker: [],
            arbeidstidsordningJobbonsker: [],
            epost: null,
            kurs: [],
        },
        url: `/pam-arena/rest/arenaperson/hentForFnr?fnr=${context.fnr}`
    };
}
