import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';

import { isNullOrUndefined } from '../../utils/util';
import { StringOrNothing } from '../felles-typer';

interface Props {
    value?: StringOrNothing;
    label?: StringOrNothing;
}

function NormalTekstWrapper(props: Props) {
    if (isNullOrUndefined(props.value)) {
        return null;
    }

    const { value, label } = props;

    return (
            <Normaltekst>{label}{value}</Normaltekst>
    );
}

export default NormalTekstWrapper;