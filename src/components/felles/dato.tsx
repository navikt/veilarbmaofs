import * as React from 'react';
import { isNullOrUndefined } from '../../utils/util';

import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../utils/emdash';
import { StringOrNothing } from '../../utils/felles-typer';
import { formaterDato } from '../utils';

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
