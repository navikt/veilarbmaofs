import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

type Props = Pick<ArenaPerson, 'sertifikater'> & Pick<ArenaPerson, 'disponererBil'>;

function Sertifikater(props: Props) {
    if (isNullOrUndefined(props.sertifikater)) {
        return null;
    }

    const sertifikatListe = props.sertifikater.map((sertifikat, index) => (
        <div key={`sertifikater-${index}`} className="underinformasjon">
            {sertifikat.sertifikatKodeNavn}
        </div>
    ));

    return (
        <Informasjonsbolk header="Sertifikater" {...props}>
            {sertifikatListe}
            <div>
                Disponerer bil: {props.disponererBil? "Ja" : "Nei"}
            </div>
        </Informasjonsbolk>
    );
}

export default Sertifikater;