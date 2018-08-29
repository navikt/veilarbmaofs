import * as React from 'react';
import {OppfolgingData, OppfolgingEnhet} from "../../datatyper/oppfolging";
import {PersonaliaEnhet, PersonaliaInfo} from "../../datatyper/personalia";
import {YtelseDataType} from "../../datatyper/ytelse";
import EMDASH from "../../utils/emdash";
import Grid from "../../utils/grid";
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import {StringOrNothing} from "../felles-typer";
import {Veileder} from "./veileder";

interface OppfolgingProps {
    data: {
        oppfolging: OppfolgingData,
        ytelser: YtelseDataType
        personalia: PersonaliaInfo
    }
}

function toStrOppfolging(enhet?: OppfolgingEnhet | null): StringOrNothing {
    if (!enhet || !enhet.enhetId) {
        return null;
    }
    return `${enhet.enhetId} ${enhet.navn}`;
}

function toStrPersonalia(enhet?: PersonaliaEnhet | null): StringOrNothing {
    if (!enhet || !enhet.enhetsnummer) {
        return null;
    }
    return `${enhet.enhetsnummer} ${enhet.navn}`;
}

function getInnsatsgruppeVisningstekst(ytelser: YtelseDataType): StringOrNothing {
    const aktiveOppfolgingskontrakter =
        ytelser.oppfolgingskontrakter.filter(kontrakt => kontrakt.status === "Aktiv");
    return aktiveOppfolgingskontrakter.length > 0 ? aktiveOppfolgingskontrakter[0].innsatsgrupper[0] : null;
}

function Oppfolging(props: OppfolgingProps) {
    const {oppfolging, personalia, ytelser} = props.data;

    return (
        <>
            <Grid columns={4} gap="0.5rem">
                <InformasjonsbolkEnkel header="Innsatsgruppe" value={getInnsatsgruppeVisningstekst(ytelser)}
                                       defaultValue={EMDASH}/>
                <Veileder veilederId={oppfolging.veilederId}/>
                <InformasjonsbolkEnkel header="Geografisk enhet"
                                       value={toStrPersonalia(personalia.geografiskEnhet)}
                                       defaultValue={EMDASH}/>
                <InformasjonsbolkEnkel header="Oppfølgingsenhet"
                                       value={toStrOppfolging(oppfolging.oppfolgingsenhet)}
                                       defaultValue={EMDASH}/>
            </Grid>
        </>
    );
}

export default Oppfolging;
