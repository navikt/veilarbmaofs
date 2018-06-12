import * as React from 'react';
import { kalkulerAlder } from "../../utils/date-utils";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import { IPersonaliaPartner } from "./personalia";

const Partner = (props: { partner: IPersonaliaPartner}) => {
    if (isNullOrUndefined(props.partner)) {
        return null;
    }

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