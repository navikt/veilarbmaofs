import * as React from 'react';

const Tilbakelenke = () =>
    <a href={`/veilarbportefoljeflatefs/tilbake?enhet=${1234 /* valgtEnhet */}`}> {/* TODO: hente enhet */}
        <i className="chevron--venstre"/>
        <span>Tilbake</span> {/* Todo: tekst */}
    </a>;

export default Tilbakelenke;