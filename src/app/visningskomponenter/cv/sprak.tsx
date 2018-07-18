import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined, omit} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Sprak(props: Pick<ArenaPerson, 'sprak'>) {
    if (isNullOrUndefined(props.sprak)) {
        return null;
    }

    const sprak = props.sprak.map((enkeltSprak, index) => (
        <div key={`kompetanse-${index}`} className="underinformasjon">
            <Element>
                {enkeltSprak.kompetanseKodeTekst}
            </Element>
            <Normaltekst>{enkeltSprak.beskrivelse || ''}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Språk" headerTypo="ingress" {...omit(props, 'sprak')}>
            {sprak}
        </Informasjonsbolk>
    );
}

export default Sprak;
