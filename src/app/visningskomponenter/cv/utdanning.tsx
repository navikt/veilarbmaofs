import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

import { Element, Normaltekst } from 'nav-frontend-typografi';

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
            <Normaltekst>Fra: {new Date(utdanning.fraDato).toLocaleDateString()}</Normaltekst>
            <Normaltekst>Til: {new Date(utdanning.fraDato).toLocaleDateString()}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Utdanning" {...props}>
            {utdanninger}
        </Informasjonsbolk>
    );
}

export default Utdanning;