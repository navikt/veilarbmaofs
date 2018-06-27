import * as React from 'react';
import { VisningKomponent } from '../../../config';
import {kalkulerAlder} from "../../utils/date-utils";
import Grid from "../../utils/grid";
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import { StringOrNull } from "../felles-typer";
import Adresser from "./adresser";
import Barn from "./barn";
import Partner from "./partner";
import Placeholder from './placeholder';
import Sivilstand from "./sivilstand";

export interface PersonaliaBarn {
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

interface PersonaliaBehandlendeEnhet {
    enhetsnummer: string;
    navn: string;
}

export interface PersonaliaSivilstand {
    sivilstand: string;
    fraDato: StringOrNull;
}

export interface PersonaliaPartner {
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
export interface PersonaliaStrukturertAdresse {
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

export type PersonaliaBostedsadresse = PersonaliaStrukturertAdresse;

interface PersonaliaPostadresse {
    ustrukturertAdresse: {
        adresselinje1: string;
        adresselinje2: StringOrNull;
        adresselinje3: StringOrNull;
        adresselinje4: StringOrNull;
        landkode: string;
    }
}

export interface PersonaliaInfo {
    fornavn: string;
    mellomnavn: StringOrNull;
    etternavn: string,
    sammensattNavn: string;
    fodselsnummer: string;
    fodselsdato: string;
    dodsdato: StringOrNull,
    barn: PersonaliaBarn[];
    diskresjonskode: StringOrNull;
    kontonummer: string;
    geografiskTilknytning: string;
    behandlendeEnhet: PersonaliaBehandlendeEnhet;
    telefon: string;
    epost: StringOrNull;
    statsborgerskap: string;
    sikkerhetstiltak: StringOrNull;
    sivilstand: PersonaliaSivilstand;
    partner: PersonaliaPartner;
    bostedsadresse: PersonaliaBostedsadresse;
    midlertidigAdresseNorge: PersonaliaStrukturertAdresse;
    midlertidigAdresseUtland: PersonaliaStrukturertAdresse;
    postAdresse: PersonaliaPostadresse;
    egenAnsatt: boolean;
    kjonn: string;

}
const MAX_ALDER_BARN = 21;

function Personalia(props: { data: { personalia: PersonaliaInfo } }) {
    const { bostedsadresse, postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland, telefon, epost, kontonummer, statsborgerskap, sivilstand, partner, barn } = props.data.personalia;
    const filtrertBarneListe = barn.filter(enkeltBarn => kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN);

    return (
        <>
            <Grid columns={5} gap="0.5rem">
                <Adresser
                    bostedsadresse={bostedsadresse}
                    postAdresse={postAdresse}
                    midlertidigAdresseNorge={midlertidigAdresseNorge}
                    midlertidigAdresseUtland={midlertidigAdresseUtland}
                />
                <InformasjonsbolkEnkel header="Telefon" value={telefon} />
                <InformasjonsbolkEnkel header="Epost" value={epost} />
                <InformasjonsbolkEnkel header="Kontonummer" value={kontonummer} />
                <InformasjonsbolkEnkel header="Statsborgerskap" value={statsborgerskap} />
                <Sivilstand sivilstand={sivilstand} />
                <Partner partner={partner} />
                <Barn barn={filtrertBarneListe} />
            </Grid>
        </>
    );
}

(Personalia as VisningKomponent).placeholder  = Placeholder;

export default Personalia;