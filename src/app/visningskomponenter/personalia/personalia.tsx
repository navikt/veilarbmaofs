import * as React from 'react';
import {StringOrNull} from "../felles-typer";

interface IPersonaliaBarn {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull;
    harSammeBosted: boolean;
    kjonn: string;
}

interface IPersonaliaBehandlendeEnhet {
    enhetsnummer: string;
    navn: string;
}

interface IPersonaliaSivilstand {
    sivilstand: string;
    fraDato: string;
}

interface IPersonaliaPartner {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string;
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull;
    harSammeBosted: boolean;
    kjonn: string;
}

interface IPersonaliaBostedsadresse {
    strukturertAdresse: {
        Gateadresse: {
            landkode: string;
            tilleggsadresse: StringOrNull;
            postnummer: string;
            poststed: string;
            husnummer: StringOrNull;
            husbokstav: StringOrNull;
            kommunenummer: string;
            gatenavn: StringOrNull;
            bolignummer: StringOrNull;
            gatenummer: StringOrNull;
        }
    }
}

export interface IPersonaliaInfo {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string,
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull,
    barn: IPersonaliaBarn[];
    diskresjonskode: StringOrNull;
    kontonummer: string;
    geografiskTilknytning: string;
    behandlendeEnhet: IPersonaliaBehandlendeEnhet;
    telefon: string;
    epost: StringOrNull;
    statsborgerskap: string;
    sikkerhetstiltak: StringOrNull;
    sivilstand: IPersonaliaSivilstand;
    partner: IPersonaliaPartner;
    bostedsadresse: IPersonaliaBostedsadresse;
    midlertidigAdresseNorge: StringOrNull;
    midlertidigAdresseUtland: StringOrNull;
    postAdresse: StringOrNull;
    egenAnsatt: boolean;
    kjonn: string;

}

function Personalia(props: { data: IPersonaliaInfo }) {
    return (
        <>
            <p>Personalia her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Personalia;