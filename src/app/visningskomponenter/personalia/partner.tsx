import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import {PersonaliaPartner} from "../../datatyper/personalia";
import { kalkulerAlder } from "../../utils/date-utils";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

function Partner(props: { partner: PersonaliaPartner}) {
    if (isNullOrUndefined(props.partner)) {
        return null;
    }
    const { partner, ...rest} = props;
    const { harSammeBosted, sammensattNavn, fodselsnummer, fodselsdato } = partner;
    const borSammen = harSammeBosted ? 'Bor med partner' : 'Bor ikke med partner';
    const alder = kalkulerAlder(new Date(fodselsdato));


    return (
        <Informasjonsbolk header="Partner" {...rest}>
            <Normaltekst>{borSammen}</Normaltekst>
            <Normaltekst>{`${sammensattNavn} (${alder})`}</Normaltekst>
            <Normaltekst>{fodselsnummer}</Normaltekst>
        </Informasjonsbolk>
    );
}

export default Partner;