import React from 'react';
import { BodyShort } from '@navikt/ds-react';
import { Registrering } from '../../../../rest/datatyper/registreringsData';
import { formaterDato, isNullOrUndefined } from '../../../../utils';

function RegistrertTid(props: Pick<Registrering, 'opprettetDato'>) {
	if (isNullOrUndefined(props.opprettetDato)) {
		return null;
	}

	const formattertTidspunkt = formaterDato(props.opprettetDato!);

	return <BodyShort className="italic-gra">{`Registrert: ${formattertTidspunkt}`}</BodyShort>;
}

export default RegistrertTid;
