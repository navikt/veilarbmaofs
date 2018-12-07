import {EtikettAdvarsel, EtikettInfo} from "nav-frontend-etiketter";
import * as React from 'react';
import {erBrukerSykmeldt, trengerAEV, trengerVurdering} from "../utils/arena-status-utils";
import hiddenIf from "../utils/hidden-if";
import {BasisinfoData} from "./basisinfo-visning";
import './etiketter.less';
import {Feature} from "../persondetaljer";

const Advarsel = hiddenIf(EtikettAdvarsel);
const Info = hiddenIf(EtikettInfo);

function featurePa(feature: Feature) {
    return feature["mao.sykmeldt_med_arbeidsgiver"];
}

function Etiketter(props: BasisinfoData) {
    const { diskresjonskode, sikkerhetstiltak, egenAnsatt } = props.personalia;

    return <div className="etikett-container">
        <Advarsel hidden={!diskresjonskode}>Kode {diskresjonskode}</Advarsel>
        <Advarsel hidden={!sikkerhetstiltak}>{sikkerhetstiltak}</Advarsel>
        <Advarsel hidden={!egenAnsatt}>Egen ansatt</Advarsel>
        <Info hidden={!(trengerVurdering(props.oppfolging))} className="etikett--info2">Trenger vurdering</Info>
        <Info hidden={!(trengerAEV(props.oppfolging))} className="etikett--info2">Behov for AEV</Info>
        <Info hidden={!(featurePa(props.feature) && erBrukerSykmeldt(props.oppfolging))} className="etikett--info2">Sykmeldt</Info>
    </div>;
}

export default Etiketter;
