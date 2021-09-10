import React from 'react';
import {Normaltekst, Undertekst} from 'nav-frontend-typografi';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {PersonaliaEpost} from "../../../../rest/datatyper/personaliav2";
import {hentKilde} from "../../../../utils/konstanter";

function Epost(props: { epost: PersonaliaEpost }) {
    if (isNullOrUndefined(props.epost)) {
        return null;
    }

    const { epost, ...rest } = props;

    return (
        <Informasjonsbolk header="Epost" {...rest} className="break-all">
            <Normaltekst>{epost.epostAdresse}</Normaltekst>
            <Undertekst color='#645f5a'>Registrert {epost.epostSistOppdatert && epost.epostSistOppdatert} <span>{`av ${hentKilde(epost.master)}`}</span> </Undertekst>
        </Informasjonsbolk>
    );
}

export default Epost;
