import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';

import { isNullOrUndefined } from '../../utils/util';
import { StringOrNothing } from '../felles-typer';
import Informasjonsbolk from './informasjonsbolk';

interface Props {
    header: string;
    value?: StringOrNothing;
    defaultValue?: string;
}

function InformasjonsbolkEnkel(props: Props) {
    if (isNullOrUndefined(props.value) && isNullOrUndefined(props.defaultValue)) {
        return null;
    }

    const { value, defaultValue, ...rest } = props;

    return (
        <Informasjonsbolk {...rest}>
            <Normaltekst>{value || defaultValue}</Normaltekst>
        </Informasjonsbolk>
    );
}

export default InformasjonsbolkEnkel;