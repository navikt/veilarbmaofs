import React from 'react';
import {Normaltekst, Undertekst} from 'nav-frontend-typografi';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {PersonaliaEpost} from "../../../../rest/datatyper/personaliav2";
import {hentKilde} from "../../../../utils/konstanter";
import EMDASH from "../../../../utils/emdash";

function Epost(props: { epost: PersonaliaEpost }) {
    const { epost, ...rest } = props;

    if (isNullOrUndefined(props.epost.epostAdresse)) {
        return (
            <Informasjonsbolk header="Epost" {...rest}>
                {EMDASH}
            </Informasjonsbolk>
        );
    }

    return (
        <Informasjonsbolk header="Epost" {...rest} className="break-all">
            <Normaltekst>{epost.epostAdresse}</Normaltekst>
            {epost.epostAdresse &&
                <Undertekst color='#645f5a'>
                    <span>Registrert {epost.epostSistOppdatert && epost.epostSistOppdatert}{` av ${hentKilde(epost.master)}`}</span>
                </Undertekst>
            }
        </Informasjonsbolk>
    );
}

export default Epost;
