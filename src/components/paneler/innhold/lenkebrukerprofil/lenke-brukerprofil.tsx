import * as React from 'react';
import { lagPersonforvalterLenke } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';
import { fetchAktorId } from '../../../../rest/api';
import Lenke from 'nav-frontend-lenker';
import { isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { AktorId } from '../../../../rest/datatyper/aktor-id';

function LenkeBrukerprofil() {
	const { fnr } = useAppStore();
	const aktorId = usePromise<AxiosResponse<AktorId>>(() => fetchAktorId(fnr));
	const aktorIdEllerFnr = isResolved(aktorId) && aktorId.result.data.aktorId ? aktorId.result.data.aktorId : fnr;

	const personforvalterUrl = lagPersonforvalterLenke(aktorIdEllerFnr);

	return (
		<div className="lenke-brukerprofil">
			<Lenke href={personforvalterUrl} target={'_blank'} rel="noreferrer noopener">
				Endre personopplysninger
			</Lenke>
		</div>
	);
}

export default LenkeBrukerprofil;
