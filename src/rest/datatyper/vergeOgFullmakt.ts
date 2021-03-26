import {StringOrNothing} from "../../utils/felles-typer";

export enum Vergetype {
    ENSLIG_MINDREAARIG_ASYLSOEKER = "Enslig mindreårig asylsøker",
    ENSLIG_MINDREAARIG_FLYKTNING = "Enslig mindreårig flyktning inklusive midlertidige saker for denne gruppen",
    FORVALTNING_UTENFOR_VERGEMAAL = "Forvaltning utenfor vergemål",
    STADFESTET_FREMTIDSFULLMAKT = "Fremtidsfullmakt",
    MINDREAARIG = "Mindreårig (unntatt EMF)",
    MIDLERTIDIG_FOR_MINDREAARIG = "Mindreårig midlertidig (unntatt EMF)",
    VOKSEN = "Voksen",
    MIDLERTIDIG_FOR_VOKSEN = "Voksen midlertidig"
}

export enum VergemaalEllerFullmaktOmfangType {
    PERSONLIGE_OG_OEKONOMISKE_INTERESSER = "Ivareta personens interesser innenfor det personlige og økonomiske området",
    UTLENDINGSSAKER = "Ivareta personens interesser innenfor det personlige og økonomiske området herunder utlendingssaken (kun for EMA)",
    PERSONLIGE_INTERESSER = "Ivareta personens interesser innenfor det personlige området",
    OEKONOMISKE_INTERESSER = "Ivareta personens interesser innenfor det økonomiske området"
}

export interface Navn {
    fornavn: String;
    mellomnavn: StringOrNothing;
    etternavn: String;
    forkortetNavn: String;
}

export interface VergeNavn {
    fornavn: String;
    mellomnavn: StringOrNothing;
    etternavn: String;
}

export interface VergeEllerFullmektig {
    navn: VergeNavn;
    motpartsPersonident: StringOrNothing;
    omfang: VergemaalEllerFullmaktOmfangType;
}

export interface Folkeregistermetadata {
    ajourholdstidspunkt: StringOrNothing;
    gyldighetstidspunkt: StringOrNothing;
}

export interface VergemaalEllerFremtidsfullmakt {
    type: Vergetype;
    embete: StringOrNothing;
    vergeEllerFullmektig: VergeEllerFullmektig;
    folkeregistermetadata: Folkeregistermetadata;
}

export interface Fullmakter {
    motpartsPersonident: StringOrNothing;
    motpartsPersonNavn: Navn;
    motpartsRolle: StringOrNothing;
    omraader: string[];
    gyldigFraOgMed: StringOrNothing;
    gyldigTilOgMed: StringOrNothing;
}

export interface VergeOgFullmaktData {
    vergemaalEllerFremtidsfullmakt: VergemaalEllerFremtidsfullmakt[];
    fullmakt: Fullmakter[];
}
