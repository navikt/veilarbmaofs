import * as React from 'react';
import { kalkulerAlder } from '../../utils/date-utils';
import { isNullOrUndefined } from '../../utils/util';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';
import {PersonaliaBarn, PersonaliaInfo} from "../../datatyper/personalia";

function EnkeltBarn(props: { barn: PersonaliaBarn }) {
    const { harSammeBosted, sammensattNavn, fodselsnummer, fodselsdato, kjonn } = props.barn;
    const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';
    const lesbartKjonn = kjonn === 'M' ? 'Gutt' : 'Jente';
    const alder = kalkulerAlder(new Date(fodselsdato));

    return (
        <div className="underinformasjon">
            <Normaltekst>
                {`${sammensattNavn} (${alder}), ${lesbartKjonn}`}
            </Normaltekst>
            <Normaltekst>
                {fodselsnummer}
            </Normaltekst>
            <Normaltekst>
                {borSammen}
            </Normaltekst>
        </div>
    );
}

function Barn(props: Pick<PersonaliaInfo, 'barn'>) {
    if (isNullOrUndefined(props.barn)) {
        return null;
    }

    const { barn, ...rest} = props;

    const barnListe = barn.map((ettBarn) => <EnkeltBarn barn={ettBarn} key={ettBarn.fodselsnummer} />);
    return (
        <Informasjonsbolk header="Barn:" {...rest}>
            {barnListe}
        </Informasjonsbolk>
    );
}

export default Barn;