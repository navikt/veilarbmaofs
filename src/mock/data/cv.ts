import { JSONValue } from 'yet-another-fetch-mock';
import { ArenaPerson, FagdokumentType, KursVarighetEnhet } from '../../rest/datatyper/arenaperson';

const CV: ArenaPerson & JSONValue = {
    sistEndret: '2019-01-15T07:52:35.456+01:00',
    synligForArbeidsgiver: false,
    sammendrag: 'Jeg er en naritime executive som har master grad og bachlor grad .Har vart teknisk direktor i mange ar og flyttet hjem til Norge hvor jeg soker arbeide innenfor then maritime sektor ,Har gode referanser og vatriert seiling og onshore based artbeide,',
    arbeidserfaring: [
        {
            tittel: 'Maskinsjef',
            arbeidsgiver: 'viola enviromental',
            sted: null,
            beskrivelse: 'Beskrivelse av arbeidserfaring',
            fraDato: '2010-04',
            tilDato: '2017-06'
        }
    ],
    fagdokumentasjoner: [
        {
            type: FagdokumentType.MESTERBREV,
            tittel: null
        },
        {
            type: FagdokumentType.SVENNEBREV_FAGBREV,
            tittel: 'Tittelen kommer her'
        }
    ],
    utdanning: [
        {
            tittel: 'Andre servicefag, andre, uspesifisert utdanningsgruppe, høyere nivå',
            studiested: 'Pasific University',
            beskrivelse: 'Beskrivelse av utdanning',
            fraDato: '1999-06',
            tilDato: '2003-06'
        },
        {
            tittel: 'Cand.scient.-utdanning, mekanikk',
            studiested: 'Pasific university',
            beskrivelse: null,
            fraDato: '1999-06',
            tilDato: '2003-06'
        },
        {
            tittel: 'Teknisk fagskole, linje for maritime fag og fiskerifag, toårig',
            studiested: 'arendal maritime hoyskole',
            beskrivelse: null,
            fraDato: '1989-06',
            tilDato: '1993-06'
        }
    ],
    annenErfaring: [
        {
            rolle: 'maskinsjef steam',
            beskrivelse: 'maskinsjef steam for brovig tank rederi',
            fraDato: '1988-02',
            tilDato: null
        },
        {
            rolle: 'vice presidet ',
            beskrivelse: 'vice presidet  for new england pump and valve',
            fraDato: '2007-08',
            tilDato: '2009-05'
        },
        {
            rolle: 'technical director',
            beskrivelse: 'technical director for cunard cruise line',
            fraDato: '2003-05',
            tilDato: '2007-09'
        },
        {
            rolle: 'technical director',
            beskrivelse: 'technical director for norwegian cruise line',
            fraDato: '2005-07',
            tilDato: '2007-06'
        },
        {
            rolle: 'maskinsjef',
            beskrivelse: 'maskinsjef for crystal cruise',
            fraDato: '1991-04',
            tilDato: '2003-05'
        }
    ],
    forerkort: [
        {
            klasse: 'B',
            fraDato: '2017-08-01',
            utloperDato: '2118-12-01'
        }
    ],
    kurs: [
        {
            tittel: 'huet',
            arrangor: 'falk',
            fraDato: '2016-10',
            varighet: {
                varighet: 1,
                tidsenhet: KursVarighetEnhet.UKE
            }
        },
        {
            tittel: 'dynamik posisjonering',
            arrangor: 'kongsberg',
            fraDato: '2010-08'
        }
    ],
    sertifikater: [
        {
            tittel: 'Sikkerhetskurs: Diverse spesialkurs',
            utsteder: null,
            gjennomfortDato: '2018-05',
            utloperDato: '2118-12'
        },
        {
            tittel: 'Maskinoffisersertifikat: Klasse 1',
            utsteder: null,
            gjennomfortDato: '2014-12',
            utloperDato: '2118-12'
        },
        {
            tittel: 'Kjelpassersertifikat: Rødt sertifikat',
            utsteder: null,
            gjennomfortDato: '1974-07',
            utloperDato: '2118-12'
        }
    ],
    sprak: [
        {
            sprak: 'Dansk',
            muntligNiva: 'Godt',
            skriftligNiva: 'Godt'
        },
        {
            sprak: 'Svensk',
            muntligNiva: 'Godt',
            skriftligNiva: 'Godt'
        },
        {
            sprak: 'Engelsk',
            muntligNiva: 'Godt',
            skriftligNiva: 'Godt'
        },
        {
            sprak: 'Tysk',
            muntligNiva: 'Godt',
            skriftligNiva: 'Godt'
        }
    ],
    jobbprofil: {
        sistEndret: '2019-01-15T07:52:35.462+01:00',
        onsketYrke: [],
        onsketArbeidssted: [
            {
                stedsnavn: 'Søgne',
                kode: 'NO10.1018'
            },
            {
                stedsnavn: 'Østfold',
                kode: 'NO01'
            },
            {
                stedsnavn: 'Akershus',
                kode: 'NO02'
            },
            {
                stedsnavn: 'Oslo',
                kode: 'NO03'
            },
            {
                stedsnavn: 'Oppland',
                kode: 'NO05'
            },
            {
                stedsnavn: 'Buskerud',
                kode: 'NO06'
            },
            {
                stedsnavn: 'Vestfold',
                kode: 'NO07'
            },
            {
                stedsnavn: 'Telemark',
                kode: 'NO08'
            },
            {
                stedsnavn: 'Aust-Agder',
                kode: 'NO09'
            },
            {
                stedsnavn: 'Vest-Agder',
                kode: 'NO10'
            },
            {
                stedsnavn: 'Rogaland',
                kode: 'NO11'
            },
            {
                stedsnavn: 'Hordaland',
                kode: 'NO12'
            },
            {
                stedsnavn: 'Sogn og Fjordane',
                kode: 'NO14'
            },
            {
                stedsnavn: 'Møre og Romsdal',
                kode: 'NO15'
            },
            {
                stedsnavn: 'Nordland',
                kode: 'NO18'
            },
            {
                stedsnavn: 'Finnmark',
                kode: 'NO20'
            },
            {
                stedsnavn: 'Øvrige områder',
                kode: 'NO99'
            },
            {
                stedsnavn: 'Trøndelag',
                kode: 'NO50'
            }
        ],
        onsketAnsettelsesform: [
            {
                tittel: 'VIKARIAT'
            },
            {
                tittel: 'ENGASJEMENT'
            },
            {
                tittel: 'PROSJEKT'
            },
            {
                tittel: 'FAST'
            },
            {
                tittel: 'SESONG'
            }
        ],
        onsketArbeidstidsordning: [
            {
                tittel: 'TURNUS'
            },
            {
                tittel: 'VAKT'
            },
            {
                tittel: 'SKIFT'
            }
        ],
        heltidDeltid: {
            heltid: true,
            deltid: false
        },
        kompetanse: []
    }
};

export default CV;
