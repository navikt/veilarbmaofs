import * as React from 'react';
import { OppfolgingsstatusData } from '../../rest/datatyper/oppfolgingsstatus';
import { PersonaliaInfo } from '../../rest/datatyper/personalia';
import { finnAldersTekst } from '../../utils/date-utils';
import ApneLukkeKnapp from './apne-lukke-knapp';
import Etiketter from './etiketter';
import KvinneIkon from './kvinne.svg';
import MannIkon from './mann.svg';

function Icon(prop: {kjonn: string}) {
    const ikon = prop.kjonn === 'K' ? KvinneIkon : MannIkon;
    const ikonTekst = `ikon ${prop.kjonn === 'K' ? 'kvinne' : 'mann'}`;

    return <img src={ikon} className="basisinfo__ikon" alt={ikonTekst}/>;
}

function NavnOgAlder(prop: { personalia: PersonaliaInfo }) {
    const aldersvisning = finnAldersTekst(prop.personalia);

    return <h1 className="basisinfo__navnogalder typo-innholdstittel">
        {prop.personalia.sammensattNavn}
        <span className="basisinfo__alder">{aldersvisning}</span>
    </h1>;
}

function Fodelsnummer(prop: {fnr: string}) {
    return <span className="basisinfo__fodselsnummer">{prop.fnr}</span>;
}

export interface BasisinfoData {
    oppfolging: OppfolgingsstatusData;
    personalia: PersonaliaInfo;
    feature: { 'mao.sykmeldt_med_arbeidsgiver': boolean };
}

export function renderBasisInfo({ personalia, oppfolging, feature }: BasisinfoData) {
    return (
        <>
            <Icon kjonn={personalia.kjonn}/>
            <div className="basisinfo__personalia">
                <NavnOgAlder personalia={personalia}/>
                <Etiketter personalia={personalia} oppfolging={oppfolging} feature={feature}/>
                <Fodelsnummer fnr={personalia.fodselsnummer}/>
            </div>
            <ApneLukkeKnapp/>
        </>
    );
}
