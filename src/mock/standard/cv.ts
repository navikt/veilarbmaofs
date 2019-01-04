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
        "adrlinje2": "",
        "adrlinje3": ""
    },
    "utdanning": [{
        "fraDato": "2000-08-01",
        "tilDato": "2004-05-01",
        "utdannelsessted": "Høyskolen i Agder",
        "alternativtUtdanningsnavn": "Barchelor i ingeniørfag, studieretning datateknikk",
    }, {
        "fraDato": "1996-08-01",
        "tilDato": "1999-06-01",
        "utdannelsessted": "Fredrik 2. VGS i Fredrikstad",
        "alternativtUtdanningsnavn": "VGS Allmennfaglig med studiekompetanse",
    }, {
        "fraDato": "1999-08-01",
        "tilDato": "1999-12-01",
        "utdannelsessted": " Garnison Porsanger",
        "alternativtUtdanningsnavn": "Førstegangstjeneste i Heimevernet",
    }],
    "yrkeserfaring": [{
        "fraDato": "2004-07-01",
        "tilDato": "2012-05-01",
        "arbeidsgiver": "Diverse",
        "styrkKodeStillingstittel": "Webmaster",
    }, {
        "fraDato": "2004-01-01",
        "tilDato": "2015-12-01",
        "arbeidsgiver": "Diverse",
        "styrkKodeStillingstittel": "Datatekniker",
    }, {
        "fraDato": "1998-12-01",
        "tilDato": "2012-05-01",
        "arbeidsgiver": "Amelti Systems, Amelti Development",
        "styrkKodeStillingstittel": "Programmerer (data)",
    }, {
        "fraDato": "1999-03-01",
        "tilDato": "2015-12-01",
        "arbeidsgiver": "Diverse",
        "styrkKodeStillingstittel": "IT-rådgiver",
    }, {
        "fraDato": "2005-01-01",
        "tilDato": "2015-12-01",
        "arbeidsgiver": "Diverse",
        "styrkKodeStillingstittel": "EDB-systemkonsulent",
    }, {
        "fraDato": "2013-09-01",
        "tilDato": "2015-08-01",
        "arbeidsgiver": "ABB/ Dovre",
        "styrkKodeStillingstittel": "Programvareutvikler",
    }, {
        "fraDato": "2013-09-01",
        "tilDato": "2015-08-01",
        "arbeidsgiver": "ABB / Dovre ",
        "styrkKodeStillingstittel": "Prosjektingeniør (olje)",
    }, {
        "fraDato": "2008-01-01",
        "tilDato": "2015-07-01",
        "arbeidsgiver": "Diverse",
        "styrkKodeStillingstittel": "Systemkonsulent",
    }],
    "sertifikater": [],
    "forerkort": [
        {
            "sertifikatKodeNavn": "Førerkort: Kl. B (personbil/varebil)",
        },
        {
            "sertifikatKodeNavn": "Førerkort: Kl. A (tung motorsykkel)",
        }
    ],
    "kompetanse": [{
        "beskrivelse": null,
        "kompetanseKodeTekst": "Grunnleggende IT-forståelse",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Word",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Excel",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Mikroprosessorer",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Databaser",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Bruk av datamaskiner, operativsystem",
    }, {
        "beskrivelse": "Her er en beskrivelse",
        "kompetanseKodeTekst": "Nettverksarbeid generelt",
    }, {
        "beskrivelse": "Her er en beskrivelse",
        "kompetanseKodeTekst": "Datateknikk",
    }, {
        "beskrivelse": "Her er en beskrivelse",
        "kompetanseKodeTekst": "Objektorientert analyse",
    }, {
        "beskrivelse": "Her er en beskrivelse",
        "kompetanseKodeTekst": "Datakort / IT-kompetanse",
    }, {
        "beskrivelse": "Her er en beskrivelse",
        "kompetanseKodeTekst": "Programmering generelt",
    }, {
        "beskrivelse": "Her er en beskrivelse",
        "kompetanseKodeTekst": "Nettverkskommunikasjon",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Internett og e-post",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Database",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Teknisk tegning",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Programvareutvikling",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Objektorientert systemutvikling",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Systemutvikling generelt",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Elektronikkarbeid",
    }, {
        "beskrivelse": null,
        "kompetanseKodeTekst": "Oljeproduksjon",
    }],
    "sprak": [{
        "beskrivelse": "Meget bra",
        "kompetanseKodeTekst": "Engelsk",
    }, {
        "beskrivelse": "Morsmål",
        "kompetanseKodeTekst": "Bokmål",
    }, {
        "beskrivelse": "God",
        "kompetanseKodeTekst": "Tysk",
    }, {
        "beskrivelse": "God",
        "kompetanseKodeTekst": "Nynorsk",
    }],
    "kurs": [{
        "fraDato": "1999-08-01",
        "arrangor": "HV",
        "tittel": "Vekterkurs"
    }, {
        "fraDato": "2015-05-01",
        "arrangor": "ABB",
        "tittel": "FSE, Lavspenning og høyspenning"
    }, {
        "fraDato": "2015-02-01",
        "arrangor": "ABB University",
        "tittel": "UNITROL 6080 Cold Commissioning"
    }, {
        "fraDato": "2015-03-01",
        "arrangor": "Trainor",
        "tittel": "Ex basic"
    }],
    "verv": [],
    "geografiJobbonsker": [{"geografiKode": "NO03", "geografiKodeTekst": "Oslo"}, {
        "geografiKode": "NO12.1201.1",
        "geografiKodeTekst": "Bergen/Bydel Fana"
    }, {"geografiKode": "NO01.0111", "geografiKodeTekst": "Hvaler"}, {
        "geografiKode": "NO01",
        "geografiKodeTekst": "Østfold"
    }],
    "yrkeJobbonsker": [{
        "styrkKode": "2166.03",
        "styrkBeskrivelse": "Web-designer",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.03",
        "styrkBeskrivelse": "Systemutvikler",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.04",
        "styrkBeskrivelse": "Datatekniker",
        "primaertJobbonske": false
    }, {"styrkKode": "2511.01", "styrkBeskrivelse": "IT-rådgiver", "primaertJobbonske": false}, {
        "styrkKode": "2512.01",
        "styrkBeskrivelse": "Programmerer (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.01",
        "styrkBeskrivelse": "Driftskonsulent (IT)",
        "primaertJobbonske": false
    }, {"styrkKode": "3514.02", "styrkBeskrivelse": "Webmaster", "primaertJobbonske": false}, {
        "styrkKode": "3511.03",
        "styrkBeskrivelse": "Dataingeniør",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2512.02",
        "styrkBeskrivelse": "Programvareutvikler",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2513.04",
        "styrkBeskrivelse": "Nettverkskonsulent (programmering)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2513.05",
        "styrkBeskrivelse": "Web-publisher (programmering)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2513.01",
        "styrkBeskrivelse": "Multimediaprogrammerer",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2514.01",
        "styrkBeskrivelse": "Applikasjonsprogrammerer",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2519.01",
        "styrkBeskrivelse": "IT-konsulent",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2521.01",
        "styrkBeskrivelse": "Dataadministrator",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2522.01",
        "styrkBeskrivelse": "Systemadministrator",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2529.01",
        "styrkBeskrivelse": "Sikkerhetsspesialist (IKT)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.02",
        "styrkBeskrivelse": "Driftstekniker (IT)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.01",
        "styrkBeskrivelse": "Brukerstøtte IKT",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3513.01",
        "styrkBeskrivelse": "EDB-systemkonsulent",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3514.01",
        "styrkBeskrivelse": "Webkoordinator",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.06",
        "styrkBeskrivelse": "Avdelingsingeniør (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.07",
        "styrkBeskrivelse": "Datakonsulent (drift)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.08",
        "styrkBeskrivelse": "Datamaskinoperatør",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.09",
        "styrkBeskrivelse": "Dataservicetekniker",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.10",
        "styrkBeskrivelse": "Driftsadministrator (IT)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.11",
        "styrkBeskrivelse": "Driftsassistent (EDB)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.12",
        "styrkBeskrivelse": "Driftsfullmektig (EDB)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.14",
        "styrkBeskrivelse": "Driftsutvikler (IT)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.15",
        "styrkBeskrivelse": "EDB-ingeniør",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.16",
        "styrkBeskrivelse": "EDB-konsulent",
        "primaertJobbonske": false
    }, {"styrkKode": "3511.17", "styrkBeskrivelse": "EDB-opeatør", "primaertJobbonske": false}, {
        "styrkKode": "3511.18",
        "styrkBeskrivelse": "Ingeniør (IT)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.19",
        "styrkBeskrivelse": "IT-medarbeider",
        "primaertJobbonske": false
    }, {"styrkKode": "3511.20", "styrkBeskrivelse": "IT-operatør", "primaertJobbonske": false}, {
        "styrkKode": "3511.21",
        "styrkBeskrivelse": "Konsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.22",
        "styrkBeskrivelse": "Programmeringsassistent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.23",
        "styrkBeskrivelse": "Seniorserviceingeniør (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3511.25",
        "styrkBeskrivelse": "Terminalansvarlig (EDB)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.02",
        "styrkBeskrivelse": "IT-brukerkonsulent",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.03",
        "styrkBeskrivelse": "Leder IT brukerstøtte",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.04",
        "styrkBeskrivelse": "Kundekonsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.05",
        "styrkBeskrivelse": "PC-konsulent",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.06",
        "styrkBeskrivelse": "Datakonsulent (support)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.07",
        "styrkBeskrivelse": "Driftskonsulent (IT support)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3512.08",
        "styrkBeskrivelse": "Kundestøtte (IKT)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3513.02",
        "styrkBeskrivelse": "Nettverkskonsulent (IT-drift)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3513.03",
        "styrkBeskrivelse": "Nettverkstekniker",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3513.04",
        "styrkBeskrivelse": "Systemassistent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3513.05",
        "styrkBeskrivelse": "Systemtekniker (IKT-drift)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "3522.03",
        "styrkBeskrivelse": "Kundekonsulent (telekommunikasjon)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2153.02",
        "styrkBeskrivelse": "Avdelingsingeniør (telekommunikasjon)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2153.03",
        "styrkBeskrivelse": "Driftsingeniør, sivil (telekommunikasjon)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2153.04",
        "styrkBeskrivelse": "Fagsjef (sivilingeniør, telekommunikasjon)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2153.12",
        "styrkBeskrivelse": "Produktutvikler (telekommunikasjon)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2434.03",
        "styrkBeskrivelse": "Salgsrepresentant (datamaskiner)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.07",
        "styrkBeskrivelse": "IT-prosjektleder",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.08",
        "styrkBeskrivelse": "IT-systemingeniør",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.09",
        "styrkBeskrivelse": "IT-teamleder",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.11",
        "styrkBeskrivelse": "Prosjektkoordinator (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.12",
        "styrkBeskrivelse": "Senior konsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.15",
        "styrkBeskrivelse": "Spesialkonsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.14",
        "styrkBeskrivelse": "Sjefskonsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.17",
        "styrkBeskrivelse": "Systemarkitekt",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2511.18",
        "styrkBeskrivelse": "Systemkonsulent",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2512.03",
        "styrkBeskrivelse": "Datakonsulent (programmering)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2512.04",
        "styrkBeskrivelse": "Kybernetiker",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2513.03",
        "styrkBeskrivelse": "Dataspillprogrammerer",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2513.02",
        "styrkBeskrivelse": "Animasjonsprogrammerer",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2513.06",
        "styrkBeskrivelse": "Web-redaktør (programmering)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2519.03",
        "styrkBeskrivelse": "Dokumentkoordinator (EDB)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2519.04",
        "styrkBeskrivelse": "Fagkonsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2519.05",
        "styrkBeskrivelse": "Førstekonsulent (data)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2519.07",
        "styrkBeskrivelse": "Programvaretester",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2519.08",
        "styrkBeskrivelse": "Systemtester",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2521.02",
        "styrkBeskrivelse": "Databaseadministrator (administrativ databehandling)",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2521.03",
        "styrkBeskrivelse": "Databasedesigner",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2522.02",
        "styrkBeskrivelse": "Systemkoordinator",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2522.03",
        "styrkBeskrivelse": "Systemoperatør",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2522.04",
        "styrkBeskrivelse": "IT-koordinator",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2522.05",
        "styrkBeskrivelse": "Nettverksadministrator",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2529.02",
        "styrkBeskrivelse": "IT-ansvarlig",
        "primaertJobbonske": false
    }, {
        "styrkKode": "2529.03",
        "styrkBeskrivelse": "Systemansvarlig",
        "primaertJobbonske": true
    }, {"styrkKode": "3118.02", "styrkBeskrivelse": "Teknisk tegner (maskin)", "primaertJobbonske": false}],
    "heltidDeltidJobbonsker": [{"heltidDeltidKode": "1.2", "heltidDeltidKodeTekst": "Heltid"}],
    "ansettelsesforholdJobbonsker": [{
        "ansettelsesforholdKode": "2.4",
        "ansettelsesforholdKodeTekst": "Fast stilling"
    }, {"ansettelsesforholdKode": "2.1", "ansettelsesforholdKodeTekst": "Vikar"}, {
        "ansettelsesforholdKode": "2.3",
        "ansettelsesforholdKodeTekst": "Prosjekt"
    }],
    "arbeidstidsordningJobbonsker": [{
        "arbeidstidsordningKode": "3.1",
        "arbeidstidsordningKodeTekst": "Dagtid"
    }, {"arbeidstidsordningKode": "3.3", "arbeidstidsordningKodeTekst": "Turnus"}, {
        "arbeidstidsordningKode": "3.6",
        "arbeidstidsordningKodeTekst": "Skiftordning"
    }, {"arbeidstidsordningKode": "3.7", "arbeidstidsordningKodeTekst": "Kveldstid"}],
    "_links": {"self": {"href": "https://app-q6.adeo.no/pam-arena/rest/arenaperson/hentForFnr?fnr=17038046195"}}
};

export default CV;
