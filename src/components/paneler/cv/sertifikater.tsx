import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { ArenaPerson } from '../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import { formaterDato, safeMap } from '../../../utils/utils';

type Props = Pick<ArenaPerson, 'sertifikater'>;

function Sertifikater(props: Props) {
    const {sertifikater, ...rest} = props;

    const sertifikatListe = safeMap(sertifikater, (sertifikat, index) => (
        <div key={`sertifikat-${index}`} className="underinformasjon">
            <Normaltekst key={`sertifikater-${index}`} className="underinformasjon">
                {sertifikat.tittel}
            </Normaltekst>
            <Normaltekst>Gjennomført dato: {formaterDato(sertifikat.gjennomfortDato, true)}</Normaltekst>
        </div>
));

    return (
        <Informasjonsbolk header="Sertifikater" headerTypo="ingress" {...rest}>
            {sertifikatListe}
        </Informasjonsbolk>
    );
}

export default Sertifikater;
