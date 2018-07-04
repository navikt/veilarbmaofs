import * as React from 'react';
import { VisningKomponent } from '../../../config';
import { OppfolgingData, OppfolgingEnhet } from "../../datatyper/oppfolging";
import { PersonaliaEnhet, PersonaliaInfo } from "../../datatyper/personalia";
import { YtelseDataType } from "../../datatyper/ytelse";
import Grid from "../../utils/grid";
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import { StringOrNull } from "../felles-typer";
import { Veileder } from "./veileder";

interface OppfolgingProps {
    data: {
        oppfolging: OppfolgingData,
        ytelser: YtelseDataType
        personalia: PersonaliaInfo
    }
}

function toStrOppfolging(enhet: OppfolgingEnhet): StringOrNull {
    return enhet.enhetId ? `${enhet.enhetId} ${enhet.navn}` : null;
}

function toStrPersonalia(enhet: PersonaliaEnhet): StringOrNull {
    return enhet.enhetsnummer ? `${enhet.enhetsnummer} ${enhet.navn}` : null;
}

function getInnsatsgruppeVisningstekst(ytelser: YtelseDataType): StringOrNull {
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
                                       defaultValue="-"/>
                <Veileder veilederId={oppfolging.veilederId}/>
                <InformasjonsbolkEnkel header="Geografisk enhet"
                                       value={toStrPersonalia(personalia.behandlendeEnhet)}
                                       defaultValue="-"/>
                <InformasjonsbolkEnkel header="Oppfølgingsenhet"
                                       value={toStrOppfolging(oppfolging.oppfolgingsenhet)}
                                       defaultValue="-"/>
            </Grid>
        </>
    );
}

export default Oppfolging as VisningKomponent;