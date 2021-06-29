import * as React from 'react';
import { lagPersonforvalterLenke } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchAktorId } from '../../../../rest/api';
import { hasData } from '../../../../rest/utils';
import Lenke from 'nav-frontend-lenker';

function LenkeBrukerprofil() {
	const { fnr } = useAppStore();
	const fetchAktorId = useFetchAktorId(fnr);
	const aktorIdEllerFnr = hasData(fetchAktorId) && fetchAktorId.data.aktorId ? fetchAktorId.data.aktorId : fnr;

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
