import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';
import { JobbetSammenhengende } from './jobbetsammenhengende';
import PersonverninformasjonUtskrift from './personverninformasjon-utskrift';
import { ForeslattProfilering } from './foreslatt-profilering';
import Show from '../../../felles/show';
import { useFetchRegistrering } from '../../../../rest/api';
import { Laster, NoData, Feilmelding } from '../../../felles/fetch';

const RegistreringPanelInnhold = () => {
    const {fnr} = useAppStore();
    const registrering = useFetchRegistrering(fnr);

    if (registrering.isLoading) {
        return <Laster/>;
    } else if (registrering.isError) {
        return <Feilmelding/>;
    }

    return registrering.data.map(registreringData => {
        const { registrering: brukerRegistrering, type } = registreringData;
        return (
            <>
                <Header registrering={brukerRegistrering} />
                <SporsmalsListe registrering={brukerRegistrering} />
                <JobbetSammenhengende registrering={brukerRegistrering} />
                <Show if={brukerRegistrering && brukerRegistrering.manueltRegistrertAv != null}>
                    <PersonverninformasjonUtskrift type={type} />
                </Show>
                <ForeslattProfilering registrering={brukerRegistrering}/>
            </>
        );
    }).withDefault(<NoData/>);
};

export default RegistreringPanelInnhold;
