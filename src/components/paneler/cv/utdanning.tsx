import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { ArenaPerson } from '../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import { safeMap} from '../../../utils/index';
import Hide from '../../felles/hide';
import { formaterDato, safeSort } from '../../../utils';

function Utdanning(props: Pick<ArenaPerson, 'utdanning'>) {
    const {utdanning: arenaUtdanning, ...rest} = props;
    const sortedUtdanning = arenaUtdanning.sort((a, b) => safeSort(b.tilDato, a.tilDato));
    const utdanninger = safeMap(sortedUtdanning, (utdanning, index) => (
        <div key={`utdanning-${index}`} className="underinformasjon">
            <Element className="typo-element">
                {utdanning.tittel}
            </Element>

            <Normaltekst>{utdanning.studiested}</Normaltekst>
            <Hide if={utdanning.beskrivelse == null}>
                <Normaltekst className="italic">{utdanning.beskrivelse}</Normaltekst>
            </Hide>
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
