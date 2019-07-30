import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, safeSort, safeMap } from '../../../../utils';

function AnnenErfaring(props: Pick<ArenaPerson, 'annenErfaring'>) {
    const {annenErfaring: arenaErfaring, ...rest} = props;
    const sortedErfaringer = arenaErfaring.sort((a, b) => safeSort(b.tilDato, a.tilDato));
    const erfaringer = safeMap(sortedErfaringer, (erfaring, index) => (
        <div key={`annenerfaring-${index}`} className="underinformasjon">
            <Element>
                {erfaring.rolle}
            </Element>

            <Normaltekst>{erfaring.beskrivelse}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(erfaring.fraDato, true)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(erfaring.tilDato, true)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Annen erfaring" headerTypo="ingress" {...rest}>
            {erfaringer}
        </Informasjonsbolk>
    );
}

export default AnnenErfaring;
