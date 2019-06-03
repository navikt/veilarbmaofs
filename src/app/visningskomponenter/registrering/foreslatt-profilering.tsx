import * as React from 'react';
import { Ingress, Normaltekst } from 'nav-frontend-typografi';
import { InnsatsgruppeType, OrdinaerRegistrering, Registrering } from '../../datatyper/registreringsData';
import { Panel } from 'nav-frontend-paneler';

interface Props {
    registrering: Registrering | undefined;
}

export function ForeslattProfilering(props: Props) {

    if (!props.registrering) {
        return null;
    }

    const ordinaerRegistrering = props.registrering as OrdinaerRegistrering;

    if (!ordinaerRegistrering.profilering) {
        return null;
    }

    return (
        <Panel border>
            <Ingress>Forslag om brukers muligheter og behov (resultat fra profilering)</Ingress>
            <Normaltekst>{innsatsgruppeBeskrivelse(ordinaerRegistrering.profilering.innsatsgruppe)}</Normaltekst>
        </Panel>

    );
}

function innsatsgruppeBeskrivelse(innsatsgruppe: InnsatsgruppeType) {
    switch (innsatsgruppe) {
        case 'STANDARD_INNSATS':
            return 'Antatt rask overgang til arbeid: Vurdér om brukeren har gode muligheter til å beholde eller komme i jobb på egenhånd.';
        case 'SITUASJONSBESTEMT_INNSATS':
            return 'Antatt behov for veiledning: Vurdér brukerens jobbmuligheter og behov for veiledning.';
        case 'BEHOV_FOR_ARBEIDSEVNEVURDERING':
            return 'Brukeren har oppgitt hindringer: Vurdér brukerens jobbmuligheter og behov for veiledning.';
        default:
            return '';

    }
}
