import EtikettAdvarsel from "nav-frontend-etiketter/lib/etikettadvarsel";
import * as React from 'react';
import {PersonaliaInfo} from "../datatyper/personalia";
import './etiketter.less';

type Props = Pick<PersonaliaInfo, 'diskresjonskode'>
    & Pick<PersonaliaInfo, 'dodsdato'>
    & Pick<PersonaliaInfo, 'sikkerhetstiltak'>
    & Pick<PersonaliaInfo, 'egenAnsatt'>;

function EtikettListe(props: {etikettListe: string[]}) {
    return <>
        {props.etikettListe.map(etikett => <EtikettAdvarsel key={etikett}>{etikett}</EtikettAdvarsel>)}
    </>;
}

function Etiketter(props: {person: Props}) {
    const { diskresjonskode, /*dodsdato,*/ sikkerhetstiltak, egenAnsatt } = props.person;

    const etikettListe: string[] = [];
    if (diskresjonskode) {
        etikettListe.push(`Kode ${diskresjonskode}`);
    }
    if (sikkerhetstiltak) {
        etikettListe.push(sikkerhetstiltak);
    }
    if (egenAnsatt) {
        etikettListe.push('Egen ansatt');
    }
    // if(dodsdato) {
    //     etikettListe.push('Død');
    // }

    return <div className="etikett-container">
            <EtikettListe etikettListe={etikettListe} />
        </div>;
}

export default Etiketter;