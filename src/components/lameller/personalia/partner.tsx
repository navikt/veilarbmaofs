import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import { PersonaliaPartner } from '../../../rest/datatyper/personalia';
import { finnAldersTekst } from '../../../utils/date-utils';
import EMDASH from '../../../utils/emdash';
import { isNullOrUndefined } from '../../../utils/util';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import { OrNothing } from '../../../utils/felles-typer';

function Partner(props: { partner: OrNothing<PersonaliaPartner>}) {
    const { partner, ...rest} = props;
    if (isNullOrUndefined(partner)) {
        return (
            <Informasjonsbolk header="Partner" {...rest}>
                {EMDASH}
            </Informasjonsbolk>
        );
    }
    const { harSammeBosted, sammensattNavn, fodselsnummer} = partner!;
    const borSammen = harSammeBosted ? 'Bor med partner' : 'Bor ikke med partner';
    const alder = finnAldersTekst(partner!);

    return (
        <Informasjonsbolk header="Partner" {...rest}>
            <Normaltekst>{borSammen}</Normaltekst>
            <Normaltekst>{`${sammensattNavn} ${alder}`}</Normaltekst>
            <Normaltekst>{fodselsnummer}</Normaltekst>
        </Informasjonsbolk>
    );
}

export default Partner;
