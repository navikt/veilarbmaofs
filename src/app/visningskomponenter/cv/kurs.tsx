import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Kurs(props: Pick<ICVInfo, 'kurs'>) {
    if (isNullOrUndefined(props.kurs)) {
        return null;
    }

    const kompetanser = props.kurs.map((kurs, index) => (
        <div key={`kurs-${index}`} className="underinformasjon">
            <div className="typo-element">
                {kurs.tittel}
            </div>
            <div>{kurs.arrangor}</div>
            <div>Fra: {new Date(kurs.fraDato).toLocaleDateString()}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" {...props}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kurs;