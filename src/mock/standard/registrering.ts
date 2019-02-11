// tslint:disable object-literal-sort-keys

import { JSONValue } from 'yet-another-fetch-mock';
import { RegistreringsData } from '../../app/datatyper/registreringsData';

export const ordinaerRegistering: RegistreringsData & JSONValue = {
    registrering: {
        id: 596,
        opprettetDato: '2018-08-30T09:17:28.386804+02:00',
        enigIOppsummering: true,
        oppsummering: null,
        besvarelse: {
            utdanning: 'VIDEREGAENDE_FAGBREV_SVENNEBREV',
            utdanningBestatt: 'JA',
            utdanningGodkjent: 'JA',
            helseHinder: 'NEI',
            andreForhold: 'NEI',
            sisteStilling: 'INGEN_SVAR',
            dinSituasjon: 'DELTIDSJOBB_VIL_MER'
        },
        sisteStilling: {
            label: 'Fotpleier',
            konseptId: 147188,
            styrk08: '5142'
        },
        profilering: {
            jobbetSammenhengendeSeksAvTolvSisteManeder: true,
            alder: 49,
            innsatsgruppe: 'STANDARD_INNSATS'
        },
        teksterForBesvarelse: [
            {
                sporsmalId:       'dinSituasjon',
                sporsmal:         'Hvorfor registrerer du deg?',
                svar:             'Jeg har deltidsjobb, men vil jobbe mer'
            },
            {
                sporsmalId:       'sisteStilling',
                sporsmal:         'Din siste jobb',
                svar:             'Fotpleier'
            },
            {
                sporsmalId:       'utdanning',
                sporsmal:         'Hva er din høyeste fullførte utdanning?',
                svar:             'Videregående, fagbrev eller svennebrev (3 år eller mer)'
            },
            {
                sporsmalId:       'utdanningGodkjent',
                sporsmal:         'Er utdanningen din godkjent i Norge?',
                svar:             'Ja'
            },
            {
                sporsmalId:       'utdanningBestatt',
                sporsmal:         'Er utdanningen din bestått?',
                svar:             'Ja'
            },
            {
                sporsmalId:       'helseHinder',
                sporsmal:         'Trenger du oppfølging i forbindelse med helseutfordringer?',
                svar:             'Nei'
            },
            {
                sporsmalId:       'andreForhold',
                sporsmal:         'Trenger du oppfølging i forbindelse med andre utfordringer?',
                svar:             'Nei'
            }
        ]
    },
};

export const sykmeldtRegistering: RegistreringsData & JSONValue = {
    registrering: {
        id: 597,
        opprettetDato: '2018-08-30T09:17:28.386804+02:00',
        besvarelse: {
            fremtidigSituasjon:       'NY_ARBEIDSGIVER',
            utdanning:                'VIDEREGAENDE_FAGBREV_SVENNEBREV',
            utdanningBestatt:         'NEI',
            utdanningGodkjentNorge:   'JA',
            andreUtfordringer:        'NEI'
        },
        teksterForBesvarelse: [
            {
                sporsmalId:   'fremtidigSituasjon',
                sporsmal:     'Hva tenker du om din fremtidige situasjon?',
                svar:         'Jeg trenger ny jobb'
            },
            {
                sporsmalId:   'utdanning',
                sporsmal:     'Hva er din høyeste fullførte utdanning?',
                svar:         'Videregående, fagbrev eller svennebrev (3 år eller mer)'
            },
            {
                sporsmalId:   'utdanningGodkjent',
                sporsmal:     'Er utdanningen din godkjent i Norge?',
                svar:         'Ja'
            },
            {
                sporsmalId:   'utdanningBestatt',
                sporsmal:     'Er utdanningen din bestått?',
                svar:         'Nei'
            },
            {
                sporsmalId:   'andreForhold',
                sporsmal:     'Er det noe annet enn helsen din som NAV bør ta hensyn til?',
                svar:         'Nei'
            }
        ]
    }
};
