import { FetchContext } from '../../utils/config';
import { SourceConfigEntry } from '../../utils/fetch-utils';
import { StringOrNothing } from '../../utils/felles-typer';
import Fagdokumentasjon from '../../components/paneler/cv/fagdokumentasjoner';

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
    tittel: StringOrNothing;
    utsteder: StringOrNothing;
    gjennomfortDato: YearMonth;
    utloperDato: YearMonth;
}

export enum SprakNiva {
    IKKE_OPPGITT = 'IKKE_OPPGITT',
    NYBEGYNNER = 'NYBEGYNNER',
    GODT = 'GODT',
    VELDIG_GODT = 'VELDIG_GODT',
    FOERSTESPRAAK = 'FOERSTESPRAAK'
}

interface Sprak {
    sprak: StringOrNothing;
    muntligNiva: string | SprakNiva; // String er lagt til for bakoverkompatibilitet
    skriftligNiva: string | SprakNiva; // String er lagt til for bakoverkompatibilitet
}

interface Kurs {
    tittel: StringOrNothing;
    arrangor: StringOrNothing;
    fraDato: YearMonth;
    varighet?: Kursvarighet;
}

export interface Kursvarighet {
    varighet: number;
    tidsenhet: KursVarighetEnhet;
}

export enum KursVarighetEnhet {
    TIME = 'TIME',
    DAG = 'DAG',
    UKE = 'UKE',
    MANED = 'MANED',
}

export interface Jobbprofil {
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

export enum FagdokumentType {
    SVENNEBREV_FAGBREV = 'SVENNEBREV_FAGBREV',
    MESTERBREV = 'MESTERBREV',
    AUTORISASJON = 'AUTORISASJON'
}

export interface Fagdokumentasjon {
    id?: string;
    tittel: string | null;
    konseptId?: string;
    type: FagdokumentType;
}

export interface ArenaPerson {
    sistEndret: StringOrNothing;
    synligForArbeidsgiver: boolean | null;
    sammendrag: StringOrNothing;
    arbeidserfaring: Arbeidserfaring[];
    utdanning: Utdanning[];
    annenErfaring: AnnenErfaring[];
    forerkort: Forerkort[];
    kurs: Kurs[];
    sertifikater: Sertifikat[];
    sprak: Sprak[];
    jobbprofil: Jobbprofil;
    fagdokumentasjoner?: Fagdokumentasjon[]; // TODO: ? er lagt til for bakoverkompatibilitet, kan fjernes
}

export enum CVFeilMelding  {
    IKKE_REGISTRERT = 'Ikke registrert',
    IKKE_TILLGANG = 'Ikke tilgang',
}

export type CVResponse = ArenaPerson | CVFeilMelding;

export function createArenaPersonSourceConfig(context: FetchContext): SourceConfigEntry<CVResponse> {
    return {
        url: `/pam-cv-api/rest/v1/arbeidssoker/${context.fnr}`,
        fallback: (error?: string, resp?: Response) => {
            const status = resp && resp.status;
            if (status === 404 || status === 204) {
                return CVFeilMelding.IKKE_REGISTRERT;
            }
            if (status === 403 || status === 401) {
                return CVFeilMelding.IKKE_TILLGANG;
            }
            return {
                sistEndret: null,
                synligForArbeidsgiver: null,
                sammendrag: null,
                arbeidserfaring: [],
                fagdokumentasjoner: [],
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
            };
        }
    };
}
