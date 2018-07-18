import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined, omit} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';
import {formaterDato} from "../utils";

function Utdanning(props: Pick<ArenaPerson, 'utdanning'>) {
    if (isNullOrUndefined(props.utdanning)) {
        return null;
    }

    const utdanninger = props.utdanning.map((utdanning, index) => (
        <div key={`utdanning-${index}`} className="underinformasjon">
            <Element className="typo-element">
                {utdanning.utdannelsessted}
            </Element>

            <Normaltekst>{utdanning.alternativtUtdanningsnavn}</Normaltekst>
            <Normaltekst>Fra: {formaterDato(utdanning.fraDato)}</Normaltekst>
            <Normaltekst>Til: {formaterDato(utdanning.tilDato)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Utdanning" headerTypo="ingress" {...omit(props, 'utdanning')}>
            {utdanninger}
        </Informasjonsbolk>
    );
}

export default Utdanning;
