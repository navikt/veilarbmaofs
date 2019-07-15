import * as React from 'react';
import { isNullOrUndefined } from '../../utils/util';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { StringOrNothing } from '../felles-typer';

function Innsatsgruppe(props: {oppfolgingskontrakter: StringOrNothing}) {
    if (isNullOrUndefined(props.oppfolgingskontrakter)) {
        return null;
    }
    const { oppfolgingskontrakter } = props;

    return (
        <Informasjonsbolk header="Innsatsgruppe" {...props}>
            {oppfolgingskontrakter}
        </Informasjonsbolk>
    );
}

export default Innsatsgruppe;
