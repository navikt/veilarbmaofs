import * as React from 'react';
import Grid from "../../grid";
import Beskrivelse from "./beskrivelse";
import Kompetanse from "./kompetanse";
import Kurs from "./kurs";
import Sertifikater from "./sertifikater";
import Utdanning from "./utdanning";
import Verv from "./verv";
import Yrkeserfaring from "./yrkeserfaring";
import {StringOrNull} from "../felles-typer";


interface ICVVerv {
    fraDato: string;
    tilDato: string;
    organisasjon: string;
    tittel: string;
}

interface ICVUtdanning {
    fraDato: string;
    tilDato: string;
    utdannelsessted: string;
    alternativtUtdanningsnavn: string;
    nusKode: string;
    nusKodeUtdanningsnavn: string;
}

interface ICVYrkeserfaring {
    fraDato: string;
    tilDato: string;
    styrkKode: string;
    styrkKodeStillingstittel: string;
    utelukketForFremtiden: boolean;
    arbeidsgiver: string;
    alternativStillingstittel: string;
}

interface ICVSertifikater {
    fraDato: string;
    tilDato: StringOrNull
    sertifikatKode: string;
    sertifikatKodeNavn: string;
    alternativtNavn: StringOrNull;
    utsteder: string;
}

interface ICVKompetanse {
    fraDato: string;
    tilDato: StringOrNull
    beskrivelse: StringOrNull
    alternativTekst: StringOrNull
    kompetanseKode: string;
    kompetanseKodeTekst: string;
}

interface ICVGeografiJobbonsker {
    geografiKodeTekst: string;
    geografiKode: string;
}

interface ICVYrkeJobbonsker {
    styrkKode: string;
    styrkBeskrivelse: string;
    primaertJobbonske: boolean;
}

interface ICVHeltidDeltidJobbonsker {
    heltidDeltidKode: string;
    heltidDeltidKodeTekst: string;
}

interface ICVAnsettelsesforholdJobbonsker {
    ansettelsesforholdKodeTekst: string;
    ansettelsesforholdKode: string;
}

interface ICVArbeidstidsordningJobbonsker {
    arbeidstidsordningKode: string;
    arbeidstidsordningKodeTekst: string;
}

interface ICVKurs {
    fraDato: string;
    tilDato: StringOrNull
    beskrivelse: string;
    tittel: string;
    arrangor: string;
    omfang: {
        verdi: StringOrNull
        enhet: StringOrNull
    }
}

export interface ICVInfo {
    personId: number;
    fodselsdato: string;
    fodselsnummer: string;
    erFodselsnummerDnr: boolean;
    formidlingsgruppekode: string;
    etternavn: string;
    fornavn: string;
    statsborgerskap: string;
    samtykkeDato: string;
    samtykkeStatus: string;
    disponererBil: boolean;
    verv: ICVVerv[];
    beskrivelse: StringOrNull;
    kandidatnummer: StringOrNull
    sistEndret: string;
    adresse: {
        landkode: string;
        postnr: string;
        poststednavn: string;
        kommunenr: number;
        adrlinje1: string;
        adrlinje2: StringOrNull
        adrlinje3: StringOrNull
    };
    utdanning: ICVUtdanning[];
    yrkeserfaring: ICVYrkeserfaring[];
    sertifikater: ICVSertifikater[];
    kompetanse: ICVKompetanse[];
    geografiJobbonsker: ICVGeografiJobbonsker[];
    yrkeJobbonsker: ICVYrkeJobbonsker[];
    heltidDeltidJobbonsker: ICVHeltidDeltidJobbonsker[];
    ansettelsesforholdJobbonsker: ICVAnsettelsesforholdJobbonsker[];
    arbeidstidsordningJobbonsker: ICVArbeidstidsordningJobbonsker[];
    epost: StringOrNull
    kurs: ICVKurs[]
    _links: {
        self: {
            href: string;
        }
    }
}



function CV(props: { data: { cv: ICVInfo } }) {
    const { beskrivelse, yrkeserfaring, utdanning, sertifikater, disponererBil, kompetanse, kurs, verv } = props.data.cv;

    return (
        <>
            <Grid columns={2} gap="0.5rem">
                <Beskrivelse beskrivelse={beskrivelse}/>
                <Yrkeserfaring yrkeserfaring={yrkeserfaring}/>
                <Utdanning utdanning={utdanning} />
                <Sertifikater sertifikater={sertifikater} disponererBil={disponererBil} />
                <Kompetanse kompetanse={kompetanse} />
                <Kurs kurs={kurs} />
                <Verv verv={verv}/>
            </Grid>
        </>
    );
}

export default CV;