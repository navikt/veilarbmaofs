import * as React from 'react';
import { kalkulerAlder } from "../../date-utils";
import Informasjonsbolk from "../informasjonsbolk";
import { IPersonaliaPartner } from "./personalia";

const Partner = (props: { partner: IPersonaliaPartner}) => {
    const { harSammeBosted, sammensattNavn, fodselsnummer, fodselsdato } = props.partner;
    const borSammen = harSammeBosted ? 'Bor med partner' : 'Bor ikke med partner';
    const alder = kalkulerAlder(new Date(fodselsdato));

    return (
        <Informasjonsbolk {...props}>
            <div>
                Partner:
            </div>
            <div>
                {borSammen}
            </div>
            <div>
                {`${sammensattNavn} (${alder})`}
            </div>
            <div>
                {fodselsnummer}
            </div>
        </Informasjonsbolk>
    );
};

export default Partner;