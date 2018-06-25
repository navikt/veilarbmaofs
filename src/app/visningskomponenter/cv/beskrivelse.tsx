import * as React from 'react';

import { Normaltekst } from 'nav-frontend-typografi';

import { ArenaPerson } from '../../datatyper/arenaperson';
import { isNullOrUndefined } from '../../utils/util';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';

function Beskrivelse(props: Pick<ArenaPerson, 'beskrivelse'>) {
    if (isNullOrUndefined(props.beskrivelse)) {
        return null;
    }

    return (
        <Informasjonsbolk header="Beskrivelse">
            <Normaltekst className="underinformasjon">
                {props.beskrivelse}
            </Normaltekst>
        </Informasjonsbolk>
    );
}

export default Beskrivelse;
