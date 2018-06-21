import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Normaltekst } from 'nav-frontend-typografi';

type Props = Pick<ArenaPerson, 'sertifikater'> & Pick<ArenaPerson, 'disponererBil'>;

function Sertifikater(props: Props) {
    if (isNullOrUndefined(props.sertifikater)) {
        return null;
    }

    const { sertifikater, disponererBil, ...rest } = props;

    const sertifikatListe = sertifikater.map((sertifikat, index) => (
        <Normaltekst key={`sertifikater-${index}`} className="underinformasjon">
            {sertifikat.sertifikatKodeNavn}
        </Normaltekst>
    ));

    return (
        <Informasjonsbolk header="Sertifikater" {...rest}>
            {sertifikatListe}
            <Normaltekst>
                Disponerer bil: {disponererBil? "Ja" : "Nei"}
            </Normaltekst>
        </Informasjonsbolk>
    );
}

export default Sertifikater;