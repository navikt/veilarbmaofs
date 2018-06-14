import * as React from 'react';
import Grid from "../../utils/grid";
import { StringOrNull } from "../felles-typer";
import Adresser from "./adresser";
import Bankkonto from "./bankkonto";
import Barn from "./barn";
import Epost from "./epost";
import Partner from "./partner";
import Sivilstand from "./sivilstand";
import Statsborgerskap from "./statsborgerskap";
import Telefon from "./telefon";

export interface IPersonaliaBarn {
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

export interface IPersonaliaSivilstand {
    sivilstand: string;
    fraDato: StringOrNull;
}

export interface IPersonaliaPartner {
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
export interface IPersonaliaStrukturertAdresse {
    strukturertAdresse: {
        Gateadresse: {
            landkode: string;
            tilleggsadresse: StringOrNull;
            postnummer: string;
            poststed: string;
            husnummer: number;
            husbokstav: StringOrNull;
            kommunenummer: string;
            gatenavn: StringOrNull;
            bolignummer: StringOrNull;
            gatenummer: number;
        }
    }
}

export type IPersonaliaBostedsadresse = IPersonaliaStrukturertAdresse;

interface IPersonaliaPostadresse {
    ustrukturertAdresse: {
        adresselinje1: string;
        adresselinje2: StringOrNull;
        adresselinje3: StringOrNull;
        adresselinje4: StringOrNull;
        landkode: string;
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
    midlertidigAdresseNorge: IPersonaliaStrukturertAdresse;
    midlertidigAdresseUtland: IPersonaliaStrukturertAdresse;
    postAdresse: IPersonaliaPostadresse;
    egenAnsatt: boolean;
    kjonn: string;

}

function Personalia(props: { data: { personalia: IPersonaliaInfo } }) {
    const { bostedsadresse, postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland, telefon, epost, kontonummer, statsborgerskap, sivilstand, partner, barn } = props.data.personalia;

    return (
        <>
            <Grid columns={5} gap="0.5rem">
                <Adresser
                    bostedsadresse={bostedsadresse}
                    postAdresse={postAdresse}
                    midlertidigAdresseNorge={midlertidigAdresseNorge}
                    midlertidigAdresseUtland={midlertidigAdresseUtland}
                />
                <Telefon telefon={telefon} />
                <Epost epost={epost} />
                <Bankkonto kontonummer={kontonummer} />
                <Statsborgerskap statsborgerskap={statsborgerskap} />
                <Sivilstand sivilstand={sivilstand} />
                <Partner partner={partner} />
                <Barn barn={barn} />
            </Grid>
        </>
    );
}

export default Personalia;