// tslint:disable object-literal-sort-keys

import {JSONValue} from 'yet-another-fetch-mock';
import {RegistreringsData} from "../../app/datatyper/registreringsData";

const registering: RegistreringsData & JSONValue = {
    "id": 444,
    "opprettetDato": "2018-08-22T00:00:00+02:00",
    "enigIOppsummering": true,
    "oppsummering": null,
    "teksterForBesvarelse": [
        {
            "sporsmalId": "dinSituasjon",
            "sporsmal": "Hvorfor registrerer du deg?",
            "svar": "Jeg har aldri vært i jobb"
        },
        {
            "sporsmalId": "sisteStilling",
            "sporsmal": "Din siste jobb",
            "svar": "Ingen yrkeserfaring"
        },
        {
            "sporsmalId": "utdanning",
            "sporsmal": "Hva er din høyeste fullførte utdanning?",
            "svar": "Høyere utdanning (5 år eller mer)"
        },
        {
            "sporsmalId": "utdanningGodkjent",
            "sporsmal": "Er utdanningen din godkjent i Norge?",
            "svar": "Ja"
        },
        {
            "sporsmalId": "utdanningBestatt",
            "sporsmal": "Er utdanningen din bestått?",
            "svar": "Nei"
        },
        {
            "sporsmalId": "helseHinder",
            "sporsmal": "Trenger du oppfølging i forbindelse med helseutfordringer?",
            "svar": "Ja"
        },
        {
            "sporsmalId": "andreForhold",
            "sporsmal": "Trenger du oppfølging i forbindelse med andre utfordringer?",
            "svar": "Nei"
        }
    ]

};

export default registering;
