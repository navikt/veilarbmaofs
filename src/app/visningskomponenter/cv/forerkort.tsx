import {Normaltekst} from 'nav-frontend-typografi';
import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {safeMap} from "../utils";

type Props = Pick<ArenaPerson, 'forerkort'> & Pick<ArenaPerson, 'disponererBil'>;

function Forerkort(props: Props) {
    const {forerkort, disponererBil, ...rest} = props;

    const forerkortListe = safeMap(forerkort, (enkeltForerkort, index) => (
        <Normaltekst key={`forerkort-${index}`} className="underinformasjon">
            {enkeltForerkort.sertifikatKodeNavn}
        </Normaltekst>
    ));

    return (
        <Informasjonsbolk header="Førerkort" headerTypo="ingress" {...rest}>
            {forerkortListe}
            <Normaltekst>
                Disponerer bil: {disponererBil ? "Ja" : "Nei"}
            </Normaltekst>
        </Informasjonsbolk>
    );
}

export default Forerkort;
