import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

function Utdanning(props: Pick<ArenaPerson, 'utdanning'>) {
    if (isNullOrUndefined(props.utdanning)) {
        return null;
    }

    const utdanninger = props.utdanning.map((utdanning, index) => (
        <div key={`utdanning-${index}`} className="underinformasjon">
            <div className="typo-element">
                {utdanning.utdannelsessted}
            </div>
            <div>{utdanning.alternativtUtdanningsnavn}</div>
            <div>Fra: {new Date(utdanning.fraDato).toLocaleDateString()}</div>
            <div>Til: {new Date(utdanning.fraDato).toLocaleDateString()}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Utdanning" {...props}>
            {utdanninger}
        </Informasjonsbolk>
    );
}

export default Utdanning;