import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { useUrlNyPersonforvalter } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';

function LenkeBrukerprofil() {
	const { fnr } = useAppStore();
	const personforvalterUrl = useUrlNyPersonforvalter(fnr);
	return (
		<a className="lenke-brukerprofil" href={personforvalterUrl} target={'_blank'} rel="noreferrer noopener">
			<Normaltekst tag="span">Endre personopplysninger</Normaltekst>
		</a>
	);
}

export default LenkeBrukerprofil;

// Modia personoversikt, lenke på localhost https://person-forvalter.nais.preprod.local/?aktoerId=10108000398
// veilarbmaofs, personalia, lagt inn lenke. på localhost https://person-forvalter.nais.adeo.no/endreperson?aktoerId=10108000398
//Endre person i preprod: https://person-forvalter.nais.preprod.local/endreperson?aktoerId=04047720066
