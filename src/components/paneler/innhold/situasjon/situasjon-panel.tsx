import React from 'react';
import SituasjonPanelInnhold from './situasjon-panel-innhold';
import Panel from '../../panel';
import { FetchResult, hasError, isPending } from '@nutgaard/use-fetch';
import { Feilmelding } from '../../../felles/fetch';
import { hasData } from '../../../../rest/utils';
import { useAppStore } from '../../../../stores/app-store';
import { Registrering, RegistreringsData } from '../../../../rest/datatyper/registreringsData';
import { useFetchRegistrering, useFetchSituasjon } from '../../../../rest/api';
import { Situasjon } from '../../../../rest/datatyper/situasjonData';
import { formaterDato } from '../../../../utils';

const SituasjonPanel = () => {
    // TODO feture toggle

    const {fnr} = useAppStore();
    const registrering: FetchResult<RegistreringsData> = useFetchRegistrering(fnr);
    const situasjonHistorikk: FetchResult<Situasjon[]> = useFetchSituasjon(fnr);

    if (isPending(registrering) || isPending(situasjonHistorikk)) {
        return null;
    } else if (hasError(registrering) || hasError(situasjonHistorikk)) {
        return <Feilmelding/>;
    } else if (!hasData(registrering) || !registrering.data.registrering) {
        return null;
    }

    let situasjonVisningHistorikk = tilSituasjonVisningHistorikk(situasjonHistorikk.data, registrering.data.registrering);

    if (!situasjonVisningHistorikk) return null;

    let {gjeldende} = situasjonVisningHistorikk;

    const tittel = `Brukers situasjon ${gjeldende.situasjon} (sist endret ${formaterDato(gjeldende.dato.toISOString())})`

    return (
        <Panel name="situasjon" tittel={tittel}>
            <SituasjonPanelInnhold situasjoner={situasjonVisningHistorikk} />
        </Panel>
    );
}

export interface SituasjonVisning {
    dato: Date;
    situasjon: string;
}

export interface SituasjonVisningHistorikk {
    gjeldende: SituasjonVisning;
    historikk: SituasjonVisning[];
}

export function tilSituasjonVisningHistorikk(situasjoner: Situasjon[], registrering: Registrering): SituasjonVisningHistorikk | null {
    const regBesvarelse = registrering.teksterForBesvarelse.find(value => value.sporsmalId === 'dinSituasjon');
    if (!regBesvarelse) return null; // TODO logg feil/metrikk?

    const regSituasjon: SituasjonVisning[] =
        [{dato: new Date(registrering.opprettetDato),
            situasjon: regBesvarelse.svar}];

    const historikk = situasjoner.map(sit => {
        return {dato: new Date(sit.opprettet), situasjon: sit.svarTekst};
    })
        .concat(regSituasjon)
        .sort((a,b) => a.dato < b.dato ? 0 : -1);

    const [gjeldende] = historikk.splice(0, 1);

    if (historikk.length === 0) return null;

    return {
        gjeldende,
        historikk
    }
}

export default SituasjonPanel;
