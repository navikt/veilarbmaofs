import { Ingress, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { Registrering } from '../../../rest/datatyper/registreringsData';
import { isNullOrUndefined } from '../../../utils';
import RegistrertTid from './registrert-tid';
import RegistrertAv from './registrert-av';

export function Header(props: {registrering?: Registrering}) {

    const { registrering } = props;

    if(!registrering || isNullOrUndefined(registrering.opprettetDato)) {
        return(
            <Normaltekst>
                Brukeren har ikke registrert seg gjennom den nye registreringsløsningen.
            </Normaltekst>
        );
    }

    const ingressTekst = registrering.manueltRegistrertAv ? 'Registrert av NAV' : 'Brukerens svar fra registreringen';

    return(
        <>
            <Ingress>{ingressTekst}</Ingress>
            <RegistrertTid opprettetDato={registrering.opprettetDato}/>
            <RegistrertAv registrering={registrering}/>
        </>
    );
}
