import * as React from 'react';
import { Hovedmaalgruppe, HovedmaalkodeMap, OppfolgingsstatusData, OppfolgingEnhet } from '../../../rest/datatyper/oppfolgingsstatus';
import { PersonaliaEnhet, PersonaliaInfo } from '../../../rest/datatyper/personalia';
import { YtelseDataType } from '../../../rest/datatyper/ytelse';
import EMDASH from '../../../utils/emdash';
import Grid from '../../../utils/grid';
import InformasjonsbolkEnkel from '../../felles/informasjonsbolk-enkel';
import { OrNothing, StringOrNothing } from '../../../utils/felles-typer';
import { Veileder } from './veileder';

interface OppfolgingProps {
    data: {
        oppfolging: OppfolgingsstatusData,
        ytelser: YtelseDataType,
        personalia: PersonaliaInfo
    };
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
        ytelser.oppfolgingskontrakter.filter((kontrakt) => kontrakt.status === 'Aktiv');
    return aktiveOppfolgingskontrakter.length > 0 ? aktiveOppfolgingskontrakter[0].innsatsgrupper[0] : null;
}

function getHovedmaalkodeTekst(hovedmaalkode: OrNothing<Hovedmaalgruppe> ): StringOrNothing {
    return hovedmaalkode != null ? HovedmaalkodeMap[hovedmaalkode] : null;
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
                <InformasjonsbolkEnkel header="Hovedmål"
                                       value={getHovedmaalkodeTekst(oppfolging.hovedmaalkode)}
                                       defaultValue={EMDASH}/>
            </Grid>
        </>
    );
}

export default Oppfolging;
