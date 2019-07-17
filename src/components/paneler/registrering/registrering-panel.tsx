import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { useAppStoreContext } from '../../../stores/app-store';
import { hasData } from '../../../rest/utils';
import { Feilmelding } from '../../felles/feilmelding';
import { Laster } from '../../felles/laster';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';
import { JobbetSammenhengende } from './jobbetsammenhengende';
import PersonverninformasjonUtskrift from './personverninformasjon-utskrift';
import { ForeslattProfilering } from './foreslatt-profilering';
import Show from '../../felles/show';

const RegistreringPanelInnhold = () => {
    const {registrering} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (!hasData(registrering)) {
            registrering.fetch({fnr});
        }
    }, []);

    return (
        <Laster avhengigheter={registrering}>
            <Feilmelding avhengigheter={registrering}>
                {() => {
                    const { registrering: brukerRegistrering, type } = registrering.data;

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
                }}
            </Feilmelding>
        </Laster>
    );
};

const RegistreringPanel = () => {
    return (
        <Panel name="registrering" tittel="Registrering">
            <RegistreringPanelInnhold/>
        </Panel>
    );
};

export default RegistreringPanel;
