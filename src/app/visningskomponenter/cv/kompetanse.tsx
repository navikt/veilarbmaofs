import {Element, Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {safeMap} from "../utils";

function Kompetanse(props: Pick<ArenaPerson, 'kompetanse'>) {
    const {kompetanse: arenaKompetanse, ...rest} = props;

    const kompetanser = safeMap(arenaKompetanse, (kompetanse) => (
        <div key={`kompetanse-${kompetanse.kompetanseKodeTekst}`} className="underinformasjon">
            <Element>
                {kompetanse.kompetanseKodeTekst}
            </Element>
            <Normaltekst>{kompetanse.beskrivelse || ''}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kompetanse" headerTypo="ingress" {...rest}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kompetanse;
