import React, { useState } from 'react';
import StoreProvider from './stores/store-provider';
import { cache, isPending } from '@nutgaard/use-fetch';
import { ViewController } from './components/views/view-controller';
import { useEventListener } from './utils';
import './app.less';
import { useFetchFeatureToggle } from './rest/api';
import { Laster } from './components/felles/fetch';
import { hasData } from './rest/utils';
import { initialFeatures } from './rest/datatyper/feature';

export interface AppProps {
	fnr: string;
	enhet?: string;
}

const App = (props: AppProps) => {
	const [renderKey, setRenderKey] = useState(0);
	const fetchFeatures = useFetchFeatureToggle();

	function rerender() {
		cache.clear();
		setRenderKey(key => key + 1);
	}

	useEventListener('rerenderMao', rerender);

	if (isPending(fetchFeatures)) {
		return <Laster midtstilt={true} />;
	}

	const features = hasData(fetchFeatures) ? fetchFeatures.data : initialFeatures

	return (
		<StoreProvider fnr={props.fnr} enhetId={props.enhet} features={features}>
			<ViewController key={renderKey}/>
		</StoreProvider>
	);
};

export default App;
