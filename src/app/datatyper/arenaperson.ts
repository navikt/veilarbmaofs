import {FetchContext} from "../../config";
import {SourceConfigEntry} from "../../fetch-utils";
import {StringOrNothing} from "../visningskomponenter/felles-typer";


type YearMonth = StringOrNothing; // er på formatet YYYY-MM
type YearMonthDay = StringOrNothing; // er på formatet YYYY-MM-DD

interface Utdanning {
    tittel?: string;
    studiested: StringOrNothing;
    beskrivelse: StringOrNothing;
    fraDato: YearMonth;
    tilDato: YearMonth;
}

interface Arbeidserfaring {
    tittel: StringOrNothing;
    arbeidsgiver: StringOrNothing;
    sted: StringOrNothing;
    beskrivelse: StringOrNothing;
    fraDato: YearMonth;
    tilDato: YearMonth;
}

interface AnnenErfaring {
    rolle: StringOrNothing;
    beskrivelse: StringOrNothing;
    fraDato: YearMonth;
    tilDato: YearMonth;
}

interface Forerkort {
    klasse: StringOrNothing;
    fraDato: YearMonthDay;
    utloperDato: YearMonthDay;
}

interface Sertifikat {
    tittel: StringOrNothing,
    utsteder: StringOrNothing;
    gjennomfortDato: YearMonth;
    utloperDato: YearMonth;
}

interface Sprak {
    sprak: StringOrNothing;
    muntligNiva: StringOrNothing;
    skriftligNiva: StringOrNothing;
}

interface Kurs {
    tittel: StringOrNothing;
    arrangor: StringOrNothing;
    fraDato: YearMonth;
    varighet: Kursvarighet;
}

export interface Kursvarighet {
    varighet: number;
    tidsenhet: KursVarighetEnhet;
}

export enum KursVarighetEnhet {
    TIME = "TIME",
    DAG = "DAG",
    UKE = "UKE",
    MANED = "MANED",
}

interface Jobbprofil {
    sistEndret: StringOrNothing;
    onsketYrke: JobbprofilYrke[];
    onsketArbeidssted: JobbprofilArbeidssted[];
    onsketAnsettelsesform: JobbprofilAnsettelsesform[];
    onsketArbeidstidsordning: JobbprofilArbeidstidsordning[];
    heltidDeltid: JobbprofilHeltidDeltid;
    kompetanse: JobbprofilKompetanse[];
}

interface JobbprofilYrke {
    tittel: string;
}

interface JobbprofilArbeidssted {
    stedsnavn: string;
    kode: string;
}

interface JobbprofilAnsettelsesform {
    tittel: string;
}

interface JobbprofilArbeidstidsordning {
    tittel: string;
}

interface JobbprofilHeltidDeltid {
    heltid: boolean;
    deltid: boolean;
}

interface JobbprofilKompetanse {
    tittel: string;
}

export interface ArenaPerson {
    sistEndret: StringOrNothing;
    synligForArbeidsgiver: boolean;
    sammendrag: StringOrNothing;
    arbeidserfaring: Arbeidserfaring[];
    utdanning: Utdanning[];
    annenErfaring: AnnenErfaring[];
    forerkort: Forerkort[];
    kurs: Kurs[];
    sertifikater: Sertifikat[];
    sprak: Sprak[];
    jobbprofil: Jobbprofil;
}

export function createArenaPersonSourceConfig(context: FetchContext): SourceConfigEntry<ArenaPerson> {
    return {
        fallback: {
            sistEndret: null,
            synligForArbeidsgiver: false,
            sammendrag: null,
            arbeidserfaring: [],
            utdanning: [],
            annenErfaring: [],
            forerkort: [],
            kurs: [],
            sertifikater: [],
            sprak: [],
            jobbprofil: {
                sistEndret: null,
                onsketYrke: [],
                onsketArbeidssted: [],
                onsketAnsettelsesform: [],
                onsketArbeidstidsordning: [],
                heltidDeltid: {
                    heltid: false,
                    deltid: false,
                },
                kompetanse: [],
            },
        },
        url: `/pam-cv-api/rest/v1/arbeidssoker/${context.fnr}`
    };
}
