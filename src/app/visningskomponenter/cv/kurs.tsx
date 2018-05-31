import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Kurs(props: Pick<ICVInfo, 'kurs'>) {
    const kompetanser = props.kurs.map((kurs, index) => (
        <div key={`kurs-${index}`} className="informasjonsbolk">
            <div className="typo-element">
                {kurs.tittel}
            </div>
            <div>{kurs.arrangor}</div>
            <div>Fra: {kurs.fraDato}</div>
        </div>
    ));

    return (
        <Informasjonsbolk header="Kurs" {...props}>
            {kompetanser}
        </Informasjonsbolk>
    );
}

export default Kurs;