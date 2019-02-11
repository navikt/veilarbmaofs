import { Element, Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import { safeMap, visEmdashHvisNull } from '../utils';

function Sprak(props: Pick<ArenaPerson, 'sprak'>) {
    const {sprak: arenaSprak, ...rest} = props;

    const sprak = safeMap(arenaSprak, (enkeltSprak, index) => (
        <div key={`kompetanse-${index}`} className="underinformasjon">
            <Element>
                {enkeltSprak.sprak}
            </Element>
            <Normaltekst>Muntlig: {visEmdashHvisNull(enkeltSprak.muntligNiva)}</Normaltekst>
            <Normaltekst>Skriftlig: {visEmdashHvisNull(enkeltSprak.skriftligNiva)}</Normaltekst>
        </div>
    ));

    return (
        <Informasjonsbolk header="Språk" headerTypo="ingress" {...rest}>
            {sprak}
        </Informasjonsbolk>
    );
}

export default Sprak;
