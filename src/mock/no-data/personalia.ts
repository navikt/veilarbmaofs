// tslint:disable object-literal-sort-keys
import {JSONValue} from "yet-another-fetch-mock/dist/types/types";
import {PersonaliaInfo} from "../../app/datatyper/personalia";

const personalia: PersonaliaInfo & JSONValue = {
    "fornavn": "BRUCE",
    "mellomnavn": null,
    "etternavn": "WAYNE",
    "sammensattNavn": "BRUCE BATTY WAYNE",
    "fodselsnummer": "10108000398",
    "fodselsdato": "1974-09-16",
    "dodsdato": null,
    "barn": [],
    "diskresjonskode": null,
    "kontonummer": "12345678910",
    "geografiskTilknytning": "0106",
    "geografiskEnhet": {
        "enhetsnummer": "0106",
        "navn": "NAV Fredrikstad"
    },
    "telefon": "+4799999999",
    "epost": null,
    "statsborgerskap": "NORGE",
    "sikkerhetstiltak": null,
    "sivilstand": {
        "sivilstand": "Ugift",
        "fraDato": null
    },
    "partner": null,
    "bostedsadresse": {
        "strukturertAdresse": {
            "Gateadresse": {
                "landkode": "NORGE",
                "tilleggsadresse": null,
                "postnummer": "1621",
                "poststed": "GRESSVIK",
                "husnummer": 2228,
                "husbokstav": null,
                "kommunenummer": "0106",
                "gatenavn": null,
                "bolignummer": null,
                "gatenummer": null
            }
        }
    },
    "midlertidigAdresseNorge": null,
    "midlertidigAdresseUtland": null,
    "postAdresse": {
        "ustrukturertAdresse": {
            "adresselinje1": "DOIDGE",
            "adresselinje2": null,
            "adresselinje3": null,
            "adresselinje4": null,
            "landkode": "NORGE"
        }
    },
    "egenAnsatt": true,
    "kjonn": "K"
};

export default personalia;
