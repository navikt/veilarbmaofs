import * as React from 'react';
import Grid from "../../grid";
import { StringOrNull } from "../felles-typer";
import Adresser from "./adresser";
import Bankkonto from "./bankkonto";
import Epost from "./epost";
import Sivilstand from "./sivilstand";
import Statsborgerskap from "./statsborgerskap";
import Telefon from "./telefon";

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

export interface IPersonaliaSivilstand {
    sivilstand: string;
    fraDato: StringOrNull;
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

function Personalia(props: { data: { personalia: IPersonaliaInfo } }) {
    const { bostedsadresse, postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland, telefon, epost, kontonummer, statsborgerskap, sivilstand } = props.data.personalia;

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
            </Grid>
        </>
    );
}

export default Personalia;