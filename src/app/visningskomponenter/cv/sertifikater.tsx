import {Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {safeMap} from "../utils";

type Props = Pick<ArenaPerson, 'sertifikater'>;

function Sertifikater(props: Props) {
    const {sertifikater, ...rest} = props;

    const sertifikatListe = safeMap(sertifikater, (sertifikat, index) => (
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
