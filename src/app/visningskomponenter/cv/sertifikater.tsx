import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

import { Normaltekst } from 'nav-frontend-typografi';

type Props = Pick<ArenaPerson, 'sertifikater'>;

function Sertifikater(props: Props) {
    if (isNullOrUndefined(props.sertifikater)) {
        return null;
    }

    const { sertifikater, ...rest } = props;

    const sertifikatListe = sertifikater.map((sertifikat, index) => (
        <Normaltekst key={`sertifikater-${index}`} className="underinformasjon">
            {sertifikat.sertifikatKodeNavn}
        </Normaltekst>
    ));

    return (
        <Informasjonsbolk header="Sertifikater" headerTypo="ingress" {...rest}>
            {sertifikatListe}
        </Informasjonsbolk>
    );
}

export default Sertifikater;
