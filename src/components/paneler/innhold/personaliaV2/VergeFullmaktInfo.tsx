import Vergemaal from './vergemaal';
import Fullmakt from './fullmakt';
import { fetchVergOgFullmakt } from '../../../../rest/api';
import { useAppStore } from '../../../../stores/app-store';
import { isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { VergeOgFullmaktData } from '../../../../rest/datatyper/vergeOgFullmakt';

function VergeFullmaktInfo() {
	const { fnr } = useAppStore();
	const vergeOgFullmakt = usePromise<AxiosResponse<VergeOgFullmaktData>>(() => fetchVergOgFullmakt(fnr));
	return (
		<>
			{isResolved(vergeOgFullmakt) && (
				<Vergemaal
					vergemaalEllerFremtidsfullmakt={vergeOgFullmakt.result.data.vergemaalEllerFremtidsfullmakt}
				/>
			)}
			{isResolved(vergeOgFullmakt) && <Fullmakt fullmakt={vergeOgFullmakt.result.data.fullmakt} />}
		</>
	);
}

export default VergeFullmaktInfo;
