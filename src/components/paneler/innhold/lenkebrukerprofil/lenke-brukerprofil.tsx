import * as React from 'react';
import { lagPersonforvalterLenke } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchAktorId } from '../../../../rest/api';
import { hasData } from '../../../../rest/utils';
import { Link } from '@navikt/ds-react';

function LenkeBrukerprofil() {
	const { fnr } = useAppStore();
	const fetchAktorId = useFetchAktorId(fnr);
	const aktorIdEllerFnr = hasData(fetchAktorId) && fetchAktorId.data.aktorId ? fetchAktorId.data.aktorId : fnr;

	const personforvalterUrl = lagPersonforvalterLenke(aktorIdEllerFnr);

	return (
		<div className="lenke-brukerprofil">
			<Link href={personforvalterUrl} target={'_blank'} rel="noreferrer noopener">
				Endre personopplysninger
			</Link>
		</div>
	);
}

export default LenkeBrukerprofil;
