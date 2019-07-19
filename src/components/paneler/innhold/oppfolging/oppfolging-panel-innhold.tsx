import React, { useEffect } from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../../utils/emdash';
import Grid from '../../../felles/grid';
import {
    HovedmaalkodeMap,
    OppfolgingsstatusData
} from '../../../../rest/datatyper/oppfolgingsstatus';
import { StringOrNothing } from '../../../../utils/felles-typer';
import { PersonaliaInfo } from '../../../../rest/datatyper/personalia';
import { YtelseData } from '../../../../rest/datatyper/ytelse';
import { VeilederData } from '../../../../rest/datatyper/veileder';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchOppfolgingsstatus, useFetchPersonalia, useFetchVeileder, useFetchYtelser } from '../../../../rest/api';
import { Laster } from '../../../felles/fetch';
import { getData } from '../../../../rest/utils';

function hentOppfolgingsEnhetTekst(oppfolgingsstatus: OppfolgingsstatusData | null): StringOrNothing {
    if (!oppfolgingsstatus || !oppfolgingsstatus.oppfolgingsenhet) {
        return null;
    }

    const {oppfolgingsenhet: {enhetId, navn}} = oppfolgingsstatus;
    return `${enhetId} ${navn}`;
}

function hentGeografiskEnhetTekst(personalia: PersonaliaInfo | null): StringOrNothing {
    if (!personalia || !personalia.geografiskEnhet) {
        return null;
    }

    const {geografiskEnhet: {enhetsnummer, navn}} = personalia;
    return `${enhetsnummer} ${navn}`;
}

function hentVeilederTekst(veileder: VeilederData | null): StringOrNothing {
    if (!veileder) {
        return null;
    }

    return `${veileder.ident} ${veileder.navn}`;
}

function hentInnsatsgruppeTekst(ytelser: YtelseData | null): StringOrNothing {
    if (!ytelser) {
        return null;
    }

    const aktiveOppfolgingskontrakter =
        ytelser.oppfolgingskontrakter.filter((kontrakt) => kontrakt.status === 'Aktiv');

    return aktiveOppfolgingskontrakter.length > 0 ? aktiveOppfolgingskontrakter[0].innsatsgrupper[0] : null;
}

function hentHovedmaalkodeTekst(oppfolgingsstatus: OppfolgingsstatusData | null): StringOrNothing {
    if (!oppfolgingsstatus || !oppfolgingsstatus.hovedmaalkode) {
        return null;
    }

    return HovedmaalkodeMap[oppfolgingsstatus.hovedmaalkode];
}

const OppfolgingPanelInnhold = () => {
    const {fnr} = useAppStore();
    const oppfolgingsstatus = useFetchOppfolgingsstatus(fnr);
    const veileder = useFetchVeileder(fnr, { lazy: true });
    const personalia = useFetchPersonalia(fnr);
    const ytelser = useFetchYtelser(fnr);

    useEffect(() => {
        if (!oppfolgingsstatus.data.isNothing()) {
            veileder.refetch();
        }
    }, [oppfolgingsstatus.data]);

    if (oppfolgingsstatus.isLoading || personalia.isLoading || ytelser.isLoading) {
        return <Laster/>;
    }

    return (
        <Grid columns={4} gap="0.5rem">
            <InformasjonsbolkEnkel
                header="Innsatsgruppe"
                value={hentInnsatsgruppeTekst(getData(ytelser))}
                defaultValue={EMDASH}
            />
            <InformasjonsbolkEnkel
                header="Veileder"
                value={hentVeilederTekst(getData(veileder))}
                defaultValue={EMDASH}
            />
            <InformasjonsbolkEnkel
                header="Geografisk enhet"
                value={hentGeografiskEnhetTekst(getData(personalia))}
                defaultValue={EMDASH}
            />
            <InformasjonsbolkEnkel
                header="Oppfølgingsenhet"
                value={hentOppfolgingsEnhetTekst(getData(oppfolgingsstatus))}
                defaultValue={EMDASH}
            />
            <InformasjonsbolkEnkel
                header="Hovedmål"
                value={hentHovedmaalkodeTekst(getData(oppfolgingsstatus))}
                defaultValue={EMDASH}
            />
        </Grid>
    );
};

export default OppfolgingPanelInnhold;
