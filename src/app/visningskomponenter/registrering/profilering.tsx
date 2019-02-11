import * as React from 'react';
import { Element, Ingress, Normaltekst } from 'nav-frontend-typografi';
import { Profilering as ProfileringData } from '../../datatyper/registreringsData';
import FloatGrid from '../../utils/float-grid';

interface Props {
    profilering?: ProfileringData;
}

export function Profilering(props: Props) {

    if (!props.profilering) {
        return null;
    }

    return (
        <>
            <Ingress>Hentet fra Aa-registeret</Ingress>
            <FloatGrid columns={2} gap={8}>
                <div>
                    <Element> Brukeren har vært sammenhengende i jobb minst 6 av de siste 12 måneder </Element>
                    <Normaltekst>{props.profilering.jobbetSammenhengendeSeksAvTolvSisteManeder ? 'Ja' : 'Nei'} </Normaltekst>
                </div>
            </FloatGrid>
        </>

    );
}
