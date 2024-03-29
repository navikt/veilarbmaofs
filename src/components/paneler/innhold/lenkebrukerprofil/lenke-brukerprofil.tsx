import { lagPersonforvalterLenke } from '../../../../utils';
import { useAppStore } from '../../../../stores/app-store';
import { fetchAktorId } from '../../../../rest/api';
import { isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { AktorId } from '../../../../rest/datatyper/aktor-id';
import { Link } from '@navikt/ds-react';
import { ExternalLink } from '@navikt/ds-icons';

function LenkeBrukerprofil() {
	const { fnr } = useAppStore();
	const aktorId = usePromise<AxiosResponse<AktorId>>(() => fetchAktorId(fnr));
	const aktorIdEllerFnr = isResolved(aktorId) && aktorId.result.data.aktorId ? aktorId.result.data.aktorId : fnr;

	const personforvalterUrl = lagPersonforvalterLenke(aktorIdEllerFnr);

	return (
		<div className="lenke-brukerprofil">
			<Link href={personforvalterUrl} target="_blank" rel="noreferrer noopener">
				Endre personopplysninger <ExternalLink />
			</Link>
		</div>
	);
}

export default LenkeBrukerprofil;
