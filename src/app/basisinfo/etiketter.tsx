import {EtikettAdvarsel} from "nav-frontend-etiketter";
import * as React from 'react';
import {PersonaliaInfo} from "../datatyper/personalia";
import {StringOrNothing} from "../visningskomponenter/felles-typer";
import './etiketter.less';

type Props = Pick<PersonaliaInfo, 'diskresjonskode'>
    & Pick<PersonaliaInfo, 'dodsdato'>
    & Pick<PersonaliaInfo, 'sikkerhetstiltak'>
    & Pick<PersonaliaInfo, 'egenAnsatt'>;

function EtikettWrapper(props : {hidden: boolean, etikettStr: StringOrNothing}) {
    if (props.hidden) {
        return null;
    }
    return <EtikettAdvarsel>{props.etikettStr}</EtikettAdvarsel>
}

function Etiketter(props: {person: Props}) {
    const { diskresjonskode, /*dodsdato,*/ sikkerhetstiltak, egenAnsatt } = props.person;

    return <div className="etikett-container">
        <EtikettWrapper hidden={!diskresjonskode} etikettStr={`Kode ${diskresjonskode}`}/>
        <EtikettWrapper hidden={!sikkerhetstiltak} etikettStr={sikkerhetstiltak}/>
        <EtikettWrapper hidden={!egenAnsatt} etikettStr={'Egen ansatt'}/>
    </div>;
}

export default Etiketter;