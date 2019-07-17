import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { ArenaPerson } from '../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import { visEmdashHvisNull } from '../../../utils';

function Sammendrag(props: Pick<ArenaPerson, 'sammendrag'>) {
    return (
        <Informasjonsbolk header="Sammendrag" headerTypo="ingress">
            <Normaltekst className="underinformasjon">{visEmdashHvisNull(props.sammendrag)}</Normaltekst>
        </Informasjonsbolk>
    );
}

export default Sammendrag;
