import * as React from 'react';
import {PersonaliaInfo} from "../datatyper/personalia";
import {finAllderstekst} from "../utils/date-utils";
import ApneLukkeKnapp from './apne-lukke-knapp';
import Etiketter from "./etiketter";
import KvinneIkon from './kvinne.svg';
import MannIkon from './mann.svg';

function Icon(prop: {kjonn: string}){
    const ikon = prop.kjonn === "K" ? KvinneIkon : MannIkon;
    const ikonTekst = `ikon ${prop.kjonn === 'K' ? 'kvinne' : 'mann'}`;

    return <img src={ikon} className="basisinfo__ikon" alt={ikonTekst}/>
}

function NavnOgAlder(prop: { personalia: PersonaliaInfo }){
    const aldersvisning = finAllderstekst(prop.personalia);

    return <h1 className="basisinfo__navnogalder typo-innholdstittel">
        {prop.personalia.sammensattNavn}
        <span className="basisinfo__alder">{aldersvisning}</span>
    </h1>
}

function Fodelsnummer(prop: {fnr: string}){
    return <span className="basisinfo__fodselsnummer">{prop.fnr}</span>
}

export function renderBasisInfo({personalia}: { personalia: PersonaliaInfo }) {
    return (
        <>
        <Icon kjonn={personalia.kjonn}/>
        <div className="basisinfo__personalia">
            <NavnOgAlder personalia={personalia}/>
            <Etiketter person={personalia}/>
            <Fodelsnummer fnr={personalia.fodselsnummer}/>
        </div>
        <ApneLukkeKnapp/>
        </>
    );
}
