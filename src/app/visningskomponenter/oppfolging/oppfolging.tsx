import * as React from 'react';
import { VisningKomponent } from '../../../config';
import Grid from "../../utils/grid";
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import {StringOrNull} from "../felles-typer";
import Placeholder from './placeholder';


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

function toStr(enhet: EnhetType): StringOrNull {
    return enhet.enhetId ? `${enhet.enhetId} ${enhet.navn}` : null;
}

function Oppfolging(props: { data: { oppfolging: OppfolgingData } }) {
    const oppfolging = props.data.oppfolging;
    return (
        <>
            <Grid columns={4} gap="0.5rem">
                <InformasjonsbolkEnkel header="Innsatsgruppe:" value={"Do do we need it?"}/>
                <InformasjonsbolkEnkel header="Veileder:" value={oppfolging.veilederId} defaultValue="-"/>
                <InformasjonsbolkEnkel header="Geografisk enhet:" value={toStr(oppfolging.geografiskEnhet)} defaultValue="-"/>
                <InformasjonsbolkEnkel header="Oppfølgingsenhet:" value={toStr(oppfolging.oppfolgingsEnhet)} defaultValue="-"/>
            </Grid>
        </>
    );
}

(Oppfolging as VisningKomponent).placeholder = Placeholder;

export default Oppfolging;