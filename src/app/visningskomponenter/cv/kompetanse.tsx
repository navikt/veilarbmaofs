import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

import { Element, Normaltekst } from 'nav-frontend-typografi';

function Kompetanse(props: Pick<ICVInfo, 'kompetanse'>) {
    if (isNullOrUndefined(props.kompetanse)) {
        return null;
    }

    const kompetanser = props.kompetanse.map((kompetanse, index) => (
        <div key={`kompetanse-${index}`} className="underinformasjon">
            <Element>
                {kompetanse.kompetanseKodeTekst}
            </Element>
            <Normaltekst>{kompetanse.beskrivelse}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kompetanse" {...props}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kompetanse;