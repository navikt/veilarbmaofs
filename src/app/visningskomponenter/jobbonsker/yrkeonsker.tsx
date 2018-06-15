import * as React from 'react';
import {YrkeJobbonsker} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../informasjonsbolk";

interface OwnProps {
    onsker: YrkeJobbonsker[]
}

function YrkeOnsker(props: OwnProps) {

    // TODO: Should we mark main wish?
    const yrkeBlock = props.onsker.map(
        yrke => <div key={yrke.styrkKode}>{yrke.styrkBeskrivelse}</div>
    );

    return (
        <Informasjonsbolk {...props}>
            <div>Yrke:</div>
            {yrkeBlock}
        </Informasjonsbolk>
    );
}

export default YrkeOnsker;