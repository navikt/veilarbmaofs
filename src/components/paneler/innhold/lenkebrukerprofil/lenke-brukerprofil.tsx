import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { isNullOrUndefined, useUrlNyPersonforvalter } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchAktorId } from '../../../../rest/api';
import { hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import Lenke from 'nav-frontend-lenker';

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
		<Lenke className="lenke-brukerprofil" href={personforvalterUrl} target={'_blank'} rel="noreferrer noopener">
			<Normaltekst tag="span">Endre personopplysninger</Normaltekst>
		</Lenke>
	);
}

export default LenkeBrukerprofil;

