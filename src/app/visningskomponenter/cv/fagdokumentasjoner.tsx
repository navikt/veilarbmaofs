import * as React from 'react';
import { ArenaPerson, FagdokumentType } from '../../datatyper/arenaperson';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { Element, Normaltekst } from 'nav-frontend-typografi';

type Props = Pick<ArenaPerson, 'fagdokumentasjoner'>;

const fagdokumentTypeTilTekst = (fagdokumentType: FagdokumentType): string => {
    switch (fagdokumentType) {
        case FagdokumentType.AUTORISASJON:
            return 'Autorisasjon';
        case FagdokumentType.MESTERBREV:
            return 'Mesterbrev';
        case FagdokumentType.SVENNEBREV_FAGBREV:
            return 'Fagbrev/Svennebrev';
        default:
            return '';
    }
};

function Fagdokumentasjoner(props: Props) {

    if (!props.fagdokumentasjoner) {
        return null;
    }

    const dokumentasjoner = props.fagdokumentasjoner.map((fagdokument, idx) => {
        return (
            <div key={`fagdokument-${idx}`} className="underinformasjon">
                <Element>
                    {fagdokumentTypeTilTekst(fagdokument.type)}
                </Element>
                <Normaltekst>{fagdokument.tittel}</Normaltekst>
            </div>
        );
    });

    return (
        <Informasjonsbolk header="Fagdokumentasjoner" headerTypo="ingress">
            {dokumentasjoner}
        </Informasjonsbolk>
    );
}

export default Fagdokumentasjoner;
