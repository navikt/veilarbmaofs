import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaSivilstand } from '../../../../rest/datatyper/personalia';
import { isNullOrUndefined } from '../../../../utils';
import Dato from '../../../felles/dato';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

function Sivilstand(props: { sivilstand: PersonaliaSivilstand }) {
    if (isNullOrUndefined(props.sivilstand)) {
        return null;
    }

    const { sivilstand, ...rest} = props;

    return (
        <Informasjonsbolk header="Sivilstand" {...rest}>
            <Normaltekst>
                {sivilstand.sivilstand}
            </Normaltekst>
            <Dato dato={sivilstand.fraDato}/>
        </Informasjonsbolk>
    );
}

export default Sivilstand;
