import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { isNullOrUndefined, useUrlNyPersonforvalter } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchAktorId } from '../../../../rest/api';
import { hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';

function BrukAktorIdEllerFnr(ident: string) {
	const aktoerId = useFetchAktorId(ident);
	if (hasError(aktoerId) || !hasData(aktoerId)) {
		return ident;
	} else {
		const brukerAktoerId = aktoerId.data.aktorId;
		if (isNullOrUndefined(brukerAktoerId)) {
			return ident;
		} else {
			return brukerAktoerId as string;
		}
	}
}

function LenkeBrukerprofil() {
	const { fnr } = useAppStore();

	const aktoerIdEllerFnr = BrukAktorIdEllerFnr(fnr);
	const personforvalterUrl = useUrlNyPersonforvalter(aktoerIdEllerFnr);
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
