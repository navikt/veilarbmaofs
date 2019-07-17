import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { ArenaPerson } from '../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import Hide from '../../felles/hide';
import { formaterDato, safeSort, safeMap } from '../../../utils';

function Arbeidserfaring(props: Pick<ArenaPerson, 'arbeidserfaring'>) {
    const {arbeidserfaring: arenaErfaring, ...rest} = props;
    const sortedErfaringer = arenaErfaring.sort((a, b) => safeSort(b.tilDato, a.tilDato));
    const erfaringer = safeMap(sortedErfaringer, (erfaring, index) => (
        <div key={`arbeidserfaring-${index}`} className="underinformasjon">
            <Element>
                {erfaring.arbeidsgiver}
            </Element>

            <Normaltekst>{erfaring.tittel}</Normaltekst>
            <Hide if={erfaring.beskrivelse == null}>
                <Normaltekst className="italic">{erfaring.beskrivelse}</Normaltekst>
            </Hide>
            <Normaltekst>Fra: {formaterDato(erfaring.fraDato, true)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(erfaring.tilDato, true)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Arbeidserfaring" headerTypo="ingress" {...rest}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default Arbeidserfaring;
