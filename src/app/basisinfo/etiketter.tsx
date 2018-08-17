import {EtikettAdvarsel, EtikettInfo} from "nav-frontend-etiketter";
import * as React from 'react';
import {OppfolgingData} from "../datatyper/oppfolging";
import {PersonaliaInfo} from "../datatyper/personalia";
import hiddenIf from "../utils/hidden-if";
import './etiketter.less';

const Advarsel = hiddenIf(EtikettAdvarsel);
const Info = hiddenIf(EtikettInfo);

function trengerVurdering(oppfolging: OppfolgingData) {
    return oppfolging.formidlingsgruppe !== 'ISERV' && oppfolging.servicegruppe === 'IVURD';
}
function trengerAEV(oppfolging: OppfolgingData) {
    return oppfolging.formidlingsgruppe !== 'ISERV' && oppfolging.servicegruppe === 'BKART';
}

function Etiketter(props: {person: PersonaliaInfo, oppfolging: OppfolgingData}) {
    const { diskresjonskode, sikkerhetstiltak, egenAnsatt } = props.person;

    return <div className="etikett-container">
        <Advarsel hidden={!diskresjonskode}>Kode {diskresjonskode}</Advarsel>
        <Advarsel hidden={!sikkerhetstiltak}>{sikkerhetstiltak}</Advarsel>
        <Advarsel hidden={!egenAnsatt}>Egen ansatt</Advarsel>
        <Info hidden={!trengerVurdering(props.oppfolging)} className="etikett--info2">Trenger vurdering</Info>
        <Info hidden={!trengerAEV(props.oppfolging)} className="etikett--info2">Behov for AEV</Info>
    </div>;
}

export default Etiketter;
