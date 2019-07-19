import React from 'react';
import { isNullOrUndefined } from '../../../../utils/index';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { StringOrNothing } from '../../../../utils/felles-typer';

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
