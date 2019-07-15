import * as React from 'react';
import { ArenaPerson, Fagdokumentasjon, FagdokumentType } from '../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../utils/emdash';

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

const mapFagdokumentasjonerTilViews = (fagdokumentasjoner: Fagdokumentasjon[]) => {
    return fagdokumentasjoner && fagdokumentasjoner.map((fagdokument, idx) => {
        return (
            <div key={`fagdokument-${idx}`} className="underinformasjon">
                <Element>
                    {fagdokumentTypeTilTekst(fagdokument.type)}
                </Element>
                <Normaltekst>{fagdokument.tittel}</Normaltekst>
            </div>
        );
    });
};

function Fagdokumentasjoner(props: Props) {
    const { fagdokumentasjoner } = props;
    const dokumentasjoner = fagdokumentasjoner && fagdokumentasjoner.length > 0 ?
        mapFagdokumentasjonerTilViews(fagdokumentasjoner)
        : (EMDASH);

    return (
        <Informasjonsbolk header="Fagdokumentasjoner" headerTypo="ingress">
            {dokumentasjoner}
        </Informasjonsbolk>
    );
}

export default Fagdokumentasjoner;
