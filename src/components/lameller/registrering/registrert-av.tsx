import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { Registrering } from '../../../rest/datatyper/registreringsData';

interface RegistrertAvProps {
    registrering: Registrering;
}

const RegistrertAv = (props: RegistrertAvProps) => {

    if (!props.registrering.manueltRegistrertAv) {
        return null;
    }

    const registrertAv = props.registrering.manueltRegistrertAv;
    const { ident, enhet } = registrertAv;

    return (
        <Normaltekst className="italic-gra">
            {`Registrert av: ${ident}, ${enhet.id} ${enhet.navn}`}
        </Normaltekst>
    );
};

export default RegistrertAv;
