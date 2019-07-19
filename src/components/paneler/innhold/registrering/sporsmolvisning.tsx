import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { Registrering, Sporsmal } from '../../../../rest/datatyper/registreringsData';
import FloatGrid from '../../../felles/float-grid';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { visEmdashHvisNull } from '../../../../utils/index';

export function SporsmalsListe(props: {registrering?: Registrering}) {

    if(!props.registrering || !props.registrering.teksterForBesvarelse) {
        return null;
    }

    const sporsmaal = props.registrering.teksterForBesvarelse;

    return (
        <FloatGrid columns={2} gap={8}>
            {sporsmaal.map(sporsmalvisning)}
        </FloatGrid>
    );
}

function sporsmalvisning(sporsmal: Sporsmal) {
    return (
        <Informasjonsbolk header={sporsmal.sporsmal} headerTypo="element" key={sporsmal.sporsmalId}>
            <Normaltekst className="underinformasjon">{visEmdashHvisNull(sporsmal.svar)}</Normaltekst>
        </Informasjonsbolk>
    );
}
