import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { Registrering } from '../../../rest/datatyper/registreringsData';
import { isNullOrUndefined } from '../../../utils/index';
import { formaterDato } from '../../../utils/utils';

function RegistrertTid(props: Pick<Registrering, 'opprettetDato'>) {
    if(isNullOrUndefined(props.opprettetDato)) {
        return null;
    }

    const formattertTidspunkt = formaterDato(props.opprettetDato!);

    return (
        <Normaltekst className="italic-gra">
            {`Registrert: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default RegistrertTid;
