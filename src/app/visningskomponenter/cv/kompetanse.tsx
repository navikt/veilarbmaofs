import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Kompetanse(props: Pick<ICVInfo, 'kompetanse'>) {
    if (isNullOrUndefined(props.kompetanse)) {
        return null;
    }

    const kompetanser = props.kompetanse.map((kompetanse, index) => (
        <div key={`kompetanse-${index}`} className="underinformasjon">
            <div className="typo-element">
                {kompetanse.kompetanseKodeTekst}
            </div>
            <div>{kompetanse.beskrivelse}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kompetanse" {...props}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kompetanse;