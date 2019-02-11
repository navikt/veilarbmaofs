import { JSONValue } from 'yet-another-fetch-mock';
import { ArenaPerson } from '../../app/datatyper/arenaperson';

const CV: ArenaPerson & JSONValue = {
    sistEndret: null,
    synligForArbeidsgiver: false,
    sammendrag: null,
    arbeidserfaring: [],
    utdanning: [],
    forerkort: [
        {
            klasse: 'B',
            fraDato: '2017-08-01',
            utloperDato: '2118-12-01'
        }
    ],
    annenErfaring: [],
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
            deltid: false
        },
        kompetanse: [],
    },
    _links: {self: {href: 'https://app-q6.adeo.no//pam-cv-api/rest/v1/arbeidssoker/10108000398'}}
};

export default CV;
