import * as React from 'react';
import { isNullOrUndefined } from '../../utils/util';

import { Normaltekst } from 'nav-frontend-typografi';
import { StringOrNull } from '../felles-typer';

function Dato(props: { dato: StringOrNull }) {
    if (isNullOrUndefined(props.dato)) {
        return null;
    }

    return (
        <Normaltekst>
            Fra: {new Date(props.dato!).toLocaleDateString()}
        </Normaltekst>
    );
}

export default Dato;
