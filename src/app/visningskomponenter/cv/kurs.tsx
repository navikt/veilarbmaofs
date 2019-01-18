import { Element, Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { formaterDato, formaterVarighet, safeMap, safeSort } from '../utils';

function Kurs(props: Pick<ArenaPerson, 'kurs'>) {
    const {kurs: arenaKurs, ...rest} = props;
    const sortedKurs = arenaKurs.sort((a, b) => safeSort(b.fraDato, a.fraDato));
    const kurs = safeMap(sortedKurs, (enkeltKurs, index) => (
        <div key={`kurs-${index}`} className="underinformasjon">
            <Element>
                {enkeltKurs.tittel}
            </Element>
            <Normaltekst>{enkeltKurs.arrangor}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(enkeltKurs.fraDato)}</Normaltekst>
            <Normaltekst>Varighet: {formaterVarighet(enkeltKurs.varighet)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" headerTypo="ingress" {...rest}>
            {kurs}
        </Informasjonsbolk>
    );
}

export default Kurs;
