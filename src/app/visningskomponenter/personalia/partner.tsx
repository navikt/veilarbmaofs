import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import {PersonaliaPartner} from "../../datatyper/personalia";
import { kalkulerAlder } from "../../utils/date-utils";
import EMDASH from '../../utils/emdash';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {OrNothing} from "../felles-typer";

function Partner(props: { partner: OrNothing<PersonaliaPartner>}) {
    const { partner, ...rest} = props;
    if (isNullOrUndefined(partner)) {
        return (
            <Informasjonsbolk header="Partner" {...rest}>
                {EMDASH}
            </Informasjonsbolk>
        );
    }
    const { harSammeBosted, sammensattNavn, fodselsnummer, fodselsdato } = partner!;
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
