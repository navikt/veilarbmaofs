import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import { isNullOrUndefined } from '../../utils/util';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';

type Props = Pick<ArenaPerson, 'forerkort'> &
    Pick<ArenaPerson, 'disponererBil'>;

function Forerkort(props: Props) {
    if (isNullOrUndefined(props.forerkort)) {
        return null;
    }

    const { forerkort, disponererBil, ...rest } = props;

    const forerkortListe = forerkort.map((enkeltForerkort, index) => (
        <Normaltekst key={`forerkort-${index}`} className="underinformasjon">
            {enkeltForerkort.sertifikatKodeNavn}
        </Normaltekst>
    ));

    return (
        <Informasjonsbolk header="Førerkort" {...rest}>
            {forerkortListe}
            <Normaltekst>
                Disponerer bil: {disponererBil ? 'Ja' : 'Nei'}
            </Normaltekst>
        </Informasjonsbolk>
    );
}

export default Forerkort;
