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
                {utdanning.utdannelsessted}
            </Element>

            <Normaltekst>{utdanning.alternativtUtdanningsnavn}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(utdanning.fraDato)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(utdanning.tilDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Utdanning" headerTypo="ingress" {...rest}>
            {utdanninger}
        </Informasjonsbolk>
    );
}

export default Utdanning;
