import React from 'react';
import {Normaltekst, Undertekst} from 'nav-frontend-typografi';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {PersonaliaEpost} from "../../../../rest/datatyper/personaliav2";
import {hentKilde} from "../../../../utils/konstanter";
import EMDASH from "../../../../utils/emdash";
import {OrNothing} from "../../../../utils/felles-typer";

function Epost(props: { epost: OrNothing<PersonaliaEpost> }) {
    const { epost, ...rest } = props;

    if (isNullOrUndefined(epost?.epostAdresse)) {
        return (
            <Informasjonsbolk header="Epost" {...rest}>
                {EMDASH}
            </Informasjonsbolk>
        );
    }

    const {epostAdresse, epostSistOppdatert, master} = epost!;

    return (
        <Informasjonsbolk header="Epost" {...rest} className="break-all">
            <Normaltekst>{epostAdresse}</Normaltekst>
            <Undertekst className="kilde-tekst">
                <span>Registrert {epostSistOppdatert && epostSistOppdatert}{` av ${hentKilde(master)}`}</span>
            </Undertekst>
        </Informasjonsbolk>
    );
}

export default Epost;
