import * as React from 'react';
import { RegistreringsData } from '../../rest/datatyper/registreringsData';
import { JobbetSammenhengende } from './jobbetsammenhengende';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';
import PersonverninformasjonUtskrift from './personverninformasjon-utskrift';
import { ForeslattProfilering } from './foreslatt-profilering';

interface Props {
    data: {
        registrering: RegistreringsData
    };
}

export function Registrering(props: Props) {

    const { registrering, type } = props.data.registrering;

    return (
        <>
            <Header registrering={registrering} />
            <SporsmalsListe registrering={registrering} />
            <JobbetSammenhengende registrering={registrering} />
            <PersonverninformasjonUtskrift type={type} hidden={!registrering || !registrering.manueltRegistrertAv} />
            <ForeslattProfilering registrering={registrering}/>
        </>
    );
}
