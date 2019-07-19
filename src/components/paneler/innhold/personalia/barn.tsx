import React from 'react';
import { finnAldersTekst } from '../../../../utils/date-utils';
import { isNullOrUndefined } from '../../../../utils/index';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaBarn, PersonaliaInfo } from '../../../../rest/datatyper/personalia';

function BorSammen(props: { barn: PersonaliaBarn }) {
    const { dodsdato, harSammeBosted } = props.barn;

    if(dodsdato) {
        return null;
    }
    const borSammen =  harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';

    return (
        <Normaltekst>
            {borSammen}
        </Normaltekst>
    );
}

function EnkeltBarn(props: { barn: PersonaliaBarn }) {
    const { sammensattNavn, fodselsnummer, kjonn} = props.barn;
    const alder = finnAldersTekst(props.barn);
    const lesbartKjonn = kjonn === 'M' ? 'Gutt' : 'Jente';

    return (
        <div className="underinformasjon">
            <Normaltekst>
                {`${sammensattNavn} ${alder}, ${lesbartKjonn}`}
            </Normaltekst>
            <Normaltekst>
                {fodselsnummer}
            </Normaltekst>
            <BorSammen barn={props.barn} />
        </div>
    );
}

function Barn(props: Pick<PersonaliaInfo, 'barn'>) {
    if (isNullOrUndefined(props.barn) || props.barn.length === 0) {
        return null;
    }

    const { barn, ...rest} = props;

    const barnListe = barn.map((ettBarn) => <EnkeltBarn barn={ettBarn} key={ettBarn.fodselsnummer} />);
    return (
        <Informasjonsbolk header="Barn under 21 år" {...rest}>
            {barnListe}
        </Informasjonsbolk>
    );
}

export default Barn;
