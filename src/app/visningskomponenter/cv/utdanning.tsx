import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Utdanning(props: Pick<ICVInfo, 'utdanning'>) {
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