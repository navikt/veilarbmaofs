import React from 'react';
import { hasData } from '../../../../rest/utils';
import Vergemaal from './vergemaal';
import Fullmakt from './fullmakt';
import { useFetchVergOgFullmakt } from '../../../../rest/api';
import { useAppStore } from '../../../../stores/app-store';

function VergeFullmaktInfo() {
	const { fnr } = useAppStore();
	const vergeOgFullmakt = useFetchVergOgFullmakt(fnr);

	return (
		<>
			{hasData(vergeOgFullmakt) && (
				<Vergemaal vergemaalEllerFremtidsfullmakt={vergeOgFullmakt.data.vergemaalEllerFremtidsfullmakt} />
			)}
			{hasData(vergeOgFullmakt) && <Fullmakt fullmakt={vergeOgFullmakt.data.fullmakt} />}
		</>
	);
}

export default VergeFullmaktInfo;
