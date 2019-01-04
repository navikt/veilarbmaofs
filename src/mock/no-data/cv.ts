// tslint:disable object-literal-sort-keys
import {JSONValue} from "yet-another-fetch-mock";
import {ArenaPerson} from "../../app/datatyper/arenaperson";

const CV: ArenaPerson & JSONValue = {
    "fodselsnummer": "17038046195",
    "disponererBil": false,
    "beskrivelse": null,
    "sistEndret": "2018-06-19T09:59:41",
    "adresse": {
        "landkode": "NO",
        "postnr": "1684",
        "poststednavn": "VESTERØY",
        "kommunenr": 111,
        "adrlinje1": "Kattekløva 14",
        "adrlinje2": null,
        "adrlinje3": null
    },
    "utdanning": [],
    "yrkeserfaring": [],
    "sertifikater": [],
    "forerkort": [],
    "kompetanse": [],
    "sprak": [],
    "kurs": [],
    "verv": [],
    "geografiJobbonsker": [],
    "yrkeJobbonsker": [],
    "heltidDeltidJobbonsker": [],
    "ansettelsesforholdJobbonsker": [],
    "arbeidstidsordningJobbonsker": [],
    "_links": {"self": {"href": "https://app-q6.adeo.no/pam-arena/rest/arenaperson/hentForFnr?fnr=17038046195"}}
};

export default CV;
