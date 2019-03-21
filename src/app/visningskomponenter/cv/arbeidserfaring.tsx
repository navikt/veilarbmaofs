import { Element, Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { formaterDato, safeMap, safeSort } from '../utils';
import Hide from '../../utils/hide';

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
