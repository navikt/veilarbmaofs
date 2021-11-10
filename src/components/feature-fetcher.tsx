import React, { PropsWithChildren, useEffect } from 'react';
import { useFetchFeatureToggle } from '../rest/api';
import { isPending } from '@nutgaard/use-fetch';
import { Laster } from './felles/fetch';
import { hasData } from '../rest/utils';
import { useAppStore } from '../stores/app-store';

function FeatureFetcher(props: PropsWithChildren<any>) {
	const fetchFeatures = useFetchFeatureToggle();
	const { setFeatures } = useAppStore();

	useEffect(() => {
		if (hasData(fetchFeatures)) {
			setFeatures(fetchFeatures.data);
		}
	}, [setFeatures, fetchFeatures]);

	if (isPending(fetchFeatures)) {
		return <Laster midtstilt={true} />;
	}

	return props.children;
}

export default FeatureFetcher;
