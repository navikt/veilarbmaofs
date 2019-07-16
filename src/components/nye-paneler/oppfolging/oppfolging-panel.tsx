import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { hasData } from '../../../rest/utils';
import { Laster } from '../../datalasting/laster';
import InformasjonsbolkEnkel from '../../felles/informasjonsbolk-enkel';
import EMDASH from '../../../utils/emdash';
import Grid from '../../grid';
import {
    HovedmaalkodeMap,
    OppfolgingsstatusData
} from '../../../rest/datatyper/oppfolgingsstatus';
import { StringOrNothing } from '../../../utils/felles-typer';
import { PersonaliaInfo } from '../../../rest/datatyper/personalia';
import { YtelseDataType } from '../../../rest/datatyper/ytelse';
import { VeilederData } from '../../../rest/datatyper/veileder';
import { useAppStoreContext } from '../../../stores/app-store';

function hentOppfolgingsEnhetTekst(oppfolgingsstatus: OppfolgingsstatusData | null): StringOrNothing {
    if (!oppfolgingsstatus || !oppfolgingsstatus.oppfolgingsenhet) {
        return null;
    }

    const { oppfolgingsenhet: { enhetId, navn } } = oppfolgingsstatus;
    return `${enhetId} ${navn}`;
}

function hentGeografiskEnhetTekst(personalia: PersonaliaInfo | null): StringOrNothing {
    if (!personalia || !personalia.geografiskEnhet) {
        return null;
    }

    const { geografiskEnhet: { enhetsnummer, navn } } = personalia;
    return `${enhetsnummer} ${navn}`;
}

function hentVeilederTekst(veileder: VeilederData | null): StringOrNothing {
    if (!veileder) {
        return null;
    }

    return `${veileder.ident} ${veileder.navn}`;
}

function hentInnsatsgruppeTekst(ytelser: YtelseDataType | null): StringOrNothing {
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
    const {oppfolgingsstatus, veileder, personalia, ytelser} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (!hasData(oppfolgingsstatus)) {
            oppfolgingsstatus.fetch({fnr});
        }

        if (!hasData(personalia)) {
            personalia.fetch({fnr});
        }

        if (!hasData(ytelser)) {
            ytelser.fetch({fnr});
        }
    }, []);

    useEffect(() => {
        if (hasData(oppfolgingsstatus)) {
            const veilederId = oppfolgingsstatus.data.veilederId;
            if (veilederId) {
                veileder.fetch({veilederId});
            }
        }
    }, [oppfolgingsstatus.status]);

    return (
        <Laster avhengigheter={[oppfolgingsstatus, veileder, personalia, ytelser]}>
            {() =>
                (<Grid columns={4} gap="0.5rem">
                    <InformasjonsbolkEnkel
                        header="Innsatsgruppe"
                        value={hentInnsatsgruppeTekst(ytelser.data)}
                        defaultValue={EMDASH}
                    />
                    <InformasjonsbolkEnkel
                        header="Veileder"
                        value={hentVeilederTekst(veileder.data)}
                        defaultValue={EMDASH}
                    />
                    <InformasjonsbolkEnkel
                        header="Geografisk enhet"
                        value={hentGeografiskEnhetTekst(personalia.data)}
                        defaultValue={EMDASH}
                    />
                    <InformasjonsbolkEnkel
                        header="Oppfølgingsenhet"
                        value={hentOppfolgingsEnhetTekst(oppfolgingsstatus.data)}
                        defaultValue={EMDASH}
                    />
                    <InformasjonsbolkEnkel
                        header="Hovedmål"
                        value={hentHovedmaalkodeTekst(oppfolgingsstatus.data)}
                        defaultValue={EMDASH}
                    />
                </Grid>)
            }
        </Laster>
    );
};

const OppfolgingPanel = () => {
    return (
        <Panel name="oppfolging" tittel="Oppfølging">
            <OppfolgingPanelInnhold/>
        </Panel>
    );
};

export default OppfolgingPanel;
