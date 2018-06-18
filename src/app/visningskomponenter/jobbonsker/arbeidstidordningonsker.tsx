import * as React from 'react';
import {ArbeidstidsordningJobbonsker} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../informasjonsbolk";

interface OwnProps {
    onsker: ArbeidstidsordningJobbonsker[]
}

function ArbeidstidordningOnsker(props: OwnProps) {
    const arbeidstidBlock = props.onsker.map(
        arbeidstid => <div key={arbeidstid.arbeidstidsordningKode}>
            {arbeidstid.arbeidstidsordningKodeTekst}
        </div>
    );

    return (
        <Informasjonsbolk {...props}>
            <div>Arbeidstidordning</div>
            {arbeidstidBlock}
        </Informasjonsbolk>
    );
}

export default ArbeidstidordningOnsker;