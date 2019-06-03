import * as React from 'react';
import { Element, Ingress, Normaltekst } from 'nav-frontend-typografi';
import { OrdinaerRegistrering, Registrering } from '../../datatyper/registreringsData';
import FloatGrid from '../../utils/float-grid';

interface Props {
    registrering: Registrering | undefined;
}

export function JobbetSammenhengende(props: Props) {

    if (!props.registrering) {
        return null;
    }

    const ordinaerRegistrering = props.registrering as OrdinaerRegistrering;

    if (!ordinaerRegistrering.profilering) {
        return null;
    }

    return (
        <>
            <Ingress>Hentet fra Aa-registeret</Ingress>
            <FloatGrid columns={2} gap={8}>
                <div>
                    <Element> Brukeren har vært sammenhengende i jobb minst 6 av de siste 12 måneder </Element>
                    <Normaltekst>{ordinaerRegistrering.profilering.jobbetSammenhengendeSeksAvTolvSisteManeder ? 'Ja' : 'Nei'} </Normaltekst>
                </div>
            </FloatGrid>
        </>

    );
}
