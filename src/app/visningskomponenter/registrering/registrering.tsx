import * as React from 'react';
import { RegistreringsData } from '../../datatyper/registreringsData';
import { Profilering } from './profilering';
import { Header } from './registrert';
import { SporsmalsListe } from './sporsmolvisning';

interface Props {
    data: {
        registrering: RegistreringsData
    };
}

export function Registrering(props: Props) {

    const { registrering } = props.data.registrering;

    return (
        <>
            <Header registrering={registrering} />
            <SporsmalsListe registrering={registrering} />
            <Profilering registrering={registrering} />
        </>
    );
}
