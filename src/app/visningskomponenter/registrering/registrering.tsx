import * as React from 'react';
import { OrdinaerRegistrering, RegistreringsData, RegistreringType } from '../../datatyper/registreringsData';
import { Profilering } from './profilering';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';

interface Props {
    data: {
        registrering: RegistreringsData
    };
}

function lagProfilering(registreringsData: RegistreringsData) {

    const { type, profilering } = registreringsData;

    if(type === RegistreringType.ORDINAER) {

        const registrering = registreringsData.registrering as OrdinaerRegistrering;

        return (
            <Profilering profilering={profilering ? profilering : (registrering && registrering.profilering)}/>
        );

    }

    return null;
}

export function Registrering(props: Props) {

    const { registrering } = props.data.registrering;

    return (
        <>
            <Header registrering={registrering}/>
            <SporsmalsListe registrering={registrering}/>
            { lagProfilering(props.data.registrering) }
        </>
    );
}
