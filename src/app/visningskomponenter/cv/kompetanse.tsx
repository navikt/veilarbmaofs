import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined, omit} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Kompetanse(props: Pick<ArenaPerson, 'kompetanse'>) {
    if (isNullOrUndefined(props.kompetanse)) {
        return null;
    }

    const kompetanser = props.kompetanse.map((kompetanse, index) => (
        <div key={`kompetanse-${index}`} className="underinformasjon">
            <Element>
                {kompetanse.kompetanseKodeTekst}
            </Element>
            <Normaltekst>{kompetanse.beskrivelse || ''}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kompetanse" headerTypo="ingress" {...omit(props, 'kompetanse')}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kompetanse;
