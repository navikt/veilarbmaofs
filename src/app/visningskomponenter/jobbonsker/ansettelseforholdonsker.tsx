import * as React from 'react';
import {AnsettelsesforholdJobbonsker} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../informasjonsbolk";

interface OwnProps {
    onsker: AnsettelsesforholdJobbonsker[]
}

function AnsettelseforholdOnsker(props: OwnProps) {
    const forholdBlock = props.onsker.map(
        forhold => <div key={forhold.ansettelsesforholdKode}>
            {forhold.ansettelsesforholdKodeTekst}
        </div>
    );

    return (
        <Informasjonsbolk {...props}>
            <div>Ansettelseforhold:</div>
            {forholdBlock}
        </Informasjonsbolk>
    );
}

export default AnsettelseforholdOnsker;