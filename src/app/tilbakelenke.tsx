import { VenstreChevron } from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import * as React from 'react';

const Tilbakelenke = () =>
    <Lenke className="tilbakelenke" href={`/veilarbportefoljeflatefs/tilbake?enhet=${1234 /* valgtEnhet */}`}> {/* TODO: hente enhet */}
        <VenstreChevron />
        <span>Tilbake</span> {/* Todo: tekst */}
    </Lenke>;

export default Tilbakelenke;