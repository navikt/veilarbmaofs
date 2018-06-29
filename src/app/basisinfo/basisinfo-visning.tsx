import * as React from 'react';
import {PersonaliaInfo} from "../datatyper/personalia";
import {kalkulerAlder} from "../utils/date-utils";
import {StringOrNull} from "../visningskomponenter/felles-typer";
import ApneLukkeKnapp from './apne-lukke-knapp';
import Etiketter from "./etiketter";
import KvinneIkon from './kvinne.svg';
import MannIkon from './mann.svg';

function Icon(prop: {kjonn: string}){
    const ikon = prop.kjonn === "K" ? KvinneIkon : MannIkon;
    const ikonTekst = `ikon ${prop.kjonn === 'K' ? 'kvinne' : 'mann'}`;

    return <img src={ikon} className="basisinfo__ikon" alt={ikonTekst}/>
}

function NavnOgAlder(prop: {navn: string, dodsdato: StringOrNull, fodselsdato: string}){
    const alder = kalkulerAlder(new Date(prop.fodselsdato));
    const aldersvisning = prop.dodsdato ? '(DØD)' : `${alder} år`;

    return <h1 className="basisinfo__navnogalder typo-innholdstittel">
        {prop.navn}
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
            <NavnOgAlder navn={personalia.sammensattNavn}
                         dodsdato={personalia.dodsdato}
                         fodselsdato={personalia.fodselsdato}/>
            <Etiketter person={personalia}/>
            <Fodelsnummer fnr={personalia.fodselsnummer}/>
        </div>
        <ApneLukkeKnapp/>
        </>
    );
}
