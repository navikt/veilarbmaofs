import * as React from 'react';
import {GeografiJobbonsker} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../informasjonsbolk";

interface OwnProps {
    onsker: GeografiJobbonsker[]
}

function GeografiOnsker(props: OwnProps) {
    const geografiBlock = props.onsker.map(
        geo => <div key={geo.geografiKode}>{geo.geografiKodeTekst}</div>
    );

    return (
        <Informasjonsbolk {...props}>
            <div>Geografi:</div>
            {geografiBlock}
        </Informasjonsbolk>
    );
}

export default GeografiOnsker;