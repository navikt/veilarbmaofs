import { Element, Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { formaterDato, safeMap, safeSort } from '../utils';

function Utdanning(props: Pick<ArenaPerson, 'utdanning'>) {
    const {utdanning: arenaUtdanning, ...rest} = props;
    const sortedUtdanning = arenaUtdanning.sort((a, b) => safeSort(b.tilDato, a.tilDato));
    const utdanninger = safeMap(sortedUtdanning, (utdanning, index) => (
        <div key={`utdanning-${index}`} className="underinformasjon">
            <Element className="typo-element">
                {utdanning.tittel}
            </Element>

            <Normaltekst>{utdanning.studiested}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(utdanning.fraDato, true)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(utdanning.tilDato, true)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Utdanning" headerTypo="ingress" {...rest}>
            {utdanninger}
        </Informasjonsbolk>
    );
}

export default Utdanning;
