import React from 'react';
import Sivilstand from "./sivilstand";
import Partner from "./partner";
import Barn from "./barn";
import { kalkulerAlder } from "../../../../utils/date-utils";
import { PersonaliaPartner, PersonaliaSivilstand, PersonsBarn} from "../../../../rest/datatyper/personaliav2";
import {OrNothing} from "../../../../utils/felles-typer";

function FamilieInfo (props: { sivilstand: PersonaliaSivilstand, partner: OrNothing<PersonaliaPartner>, barn: PersonsBarn[] }) {
    const { sivilstand, partner, barn, ...rest } = props;

    const MAX_ALDER_BARN = 21;
    const filtrertBarneListe = barn && barn.filter(enkeltBarn => kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN);

    return (
        <div {...rest}>
            <Sivilstand sivilstand={sivilstand} />
            <Partner partner={partner} />
            <Barn barn={filtrertBarneListe} />
        </div>
    );
}

export default FamilieInfo;
