import * as React from 'react';
import {HeltidDeltidJobbonsker} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../informasjonsbolk";

interface OwnProps {
    onsker: HeltidDeltidJobbonsker[]
}

function StillingStorrelseOnsker(props: OwnProps) {
    const stillingBlock = props.onsker.map(
        stilling => <div key={stilling.heltidDeltidKode}>
            {stilling.heltidDeltidKodeTekst}
            </div>
    );

    return (
        <Informasjonsbolk {...props}>
            <div>Heltid/Deltid:</div>
            {stillingBlock}
        </Informasjonsbolk>
    );
}

export default StillingStorrelseOnsker;