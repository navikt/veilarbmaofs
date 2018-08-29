import {EtikettAdvarsel, EtikettInfo} from "nav-frontend-etiketter";
import * as React from 'react';
import hiddenIf from "../utils/hidden-if";
import {BasisinfoData} from "./basisinfo-visning";
import './etiketter.less';

const Advarsel = hiddenIf(EtikettAdvarsel);
const Info = hiddenIf(EtikettInfo);

function featurePa(props: BasisinfoData) {
    return props.feature["mao.trenger_vurdering"];
}

function trengerVurdering(props: BasisinfoData) {
    return props.oppfolging.formidlingsgruppe !== 'ISERV' && props.oppfolging.servicegruppe === 'IVURD';
}
function trengerAEV(props: BasisinfoData) {
    return props.oppfolging.formidlingsgruppe !== 'ISERV' && props.oppfolging.servicegruppe === 'BKART';
}

function Etiketter(props: BasisinfoData) {
    const { diskresjonskode, sikkerhetstiltak, egenAnsatt } = props.personalia;

    return <div className="etikett-container">
        <Advarsel hidden={!diskresjonskode}>Kode {diskresjonskode}</Advarsel>
        <Advarsel hidden={!sikkerhetstiltak}>{sikkerhetstiltak}</Advarsel>
        <Advarsel hidden={!egenAnsatt}>Egen ansatt</Advarsel>
        <Info hidden={!(featurePa(props) && trengerVurdering(props))} className="etikett--info2">Trenger vurdering</Info>
        <Info hidden={!(featurePa(props) && trengerAEV(props))} className="etikett--info2">Behov for AEV</Info>
    </div>;
}

export default Etiketter;
