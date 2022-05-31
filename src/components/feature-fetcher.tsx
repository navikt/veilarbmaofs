import React, { PropsWithChildren, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { fetchFeatureToggle } from '../rest/api';
import { Laster } from './felles/fetch';
import { Features } from '../rest/datatyper/feature';

import { useAppStore } from '../stores/app-store';
import { isNotStartedOrPending, isResolved, usePromise } from '../utils/use-promise';

function FeatureFetcher(props: PropsWithChildren<any>) {
	const fetchFeatures = usePromise<AxiosResponse<Features>>(() => fetchFeatureToggle());
	const { setFeatures } = useAppStore();

	useEffect(() => {
		if (isResolved(fetchFeatures)) {
			setFeatures(fetchFeatures.result.data);
		}
	}, [setFeatures, fetchFeatures]);

	if (isNotStartedOrPending(fetchFeatures)) {
		return <Laster midtstilt={true} />;
	}

	return props.children;
}

export default FeatureFetcher;
