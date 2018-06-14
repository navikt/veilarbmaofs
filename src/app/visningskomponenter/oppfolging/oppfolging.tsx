import * as React from 'react';
import Grid from "../../utils/grid";
import {StringOrNull} from "../felles-typer";
import Enhet from "./enhet";
import Innsatsgruppe from "./innsatsgruppe";
import Veileder from "./veileder";


export interface EnhetType {
    navn: StringOrNull;
    enhetId: StringOrNull;
}

export interface OppfolgingData {
    formidlingsgruppe: StringOrNull;
    rettighetsgruppe: StringOrNull;
    servicegruppe: StringOrNull;
    oppfolgingsEnhet: EnhetType,
    geografiskEnhet: EnhetType,
    veilederId: StringOrNull;
}

function Oppfolging(props: { data: { oppfolging: OppfolgingData } }) {
    const oppfolging = props.data.oppfolging;
    return (
        <>
            <Grid columns={4} gap="0.5rem">
                <Innsatsgruppe innsatsgruppe={"Do we need it here?"}/>
                <Veileder veilederId={oppfolging.veilederId}/>
                <Enhet enhet={oppfolging.geografiskEnhet} navn="Geografisk enhet"/>
                <Enhet enhet={oppfolging.oppfolgingsEnhet} navn="Oppfølgingsenhet"/>
            </Grid>
        </>
    );
}

export default Oppfolging;