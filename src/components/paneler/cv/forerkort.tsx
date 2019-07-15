import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { ArenaPerson } from '../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import { formaterDato, safeMap, visEmdashHvisNull } from '../../utils';

type Props = Pick<ArenaPerson, 'forerkort'>;

function Forerkort(props: Props) {
    const {forerkort, ...rest} = props;
    const forerkortListe = safeMap(forerkort, (enkeltForerkort, index) => (
        <div key={`forerkort-${index}`} className="underinformasjon">
            <Normaltekst key={`forerkort-${index}`} className="underinformasjon">
                Klasse: {visEmdashHvisNull(enkeltForerkort.klasse)}
            </Normaltekst>
            <Normaltekst>Fra: {formaterDato(enkeltForerkort.fraDato)}</Normaltekst>
            <Normaltekst>Utløper: {formaterDato(enkeltForerkort.utloperDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Førerkort" headerTypo="ingress" {...rest}>
            {forerkortListe}
        </Informasjonsbolk>
    );
}

export default Forerkort;
