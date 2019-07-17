import React from 'react';
import { isNullOrUndefined } from '../../utils/index';

import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../utils/emdash';
import { StringOrNothing } from '../../utils/felles-typer';
import { formaterDato } from '../../utils/index';

function Dato(props: { dato: StringOrNothing }) {
    if (isNullOrUndefined(props.dato)) {
        return <>{EMDASH}</>;
    }

    return (
        <Normaltekst>
            Fra: {formaterDato(props.dato!)}
        </Normaltekst>
    );
}

export default Dato;
