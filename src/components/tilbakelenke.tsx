import { VenstreChevron } from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import * as React from 'react';

interface Props {
    enhet?: string;
}

function Tilbakelenke(props: Props) {
    return <Lenke className="tilbakelenke" href={`/veilarbportefoljeflatefs/tilbake?enhet=${props.enhet}`}>
        <VenstreChevron/>
        <span>Tilbake</span> {/* Todo: tekst */}
    </Lenke>;
}

export default Tilbakelenke;
