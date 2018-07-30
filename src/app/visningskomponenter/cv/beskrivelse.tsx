import {Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {visEmdashHvisNull} from "../utils";

function Beskrivelse(props: Pick<ArenaPerson, 'beskrivelse'>) {
    return (
        <Informasjonsbolk header="Beskrivelse" headerTypo="ingress">
            <Normaltekst className="underinformasjon">{visEmdashHvisNull(props.beskrivelse)}</Normaltekst>
        </Informasjonsbolk>
    );
}

export default Beskrivelse;
