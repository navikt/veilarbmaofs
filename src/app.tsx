import React from 'react';
import StoreProvider from './stores/store-provider';
import { ViewController } from './components/views/view-controller';
import './app.less';
import FeatureFetcher from './components/feature-fetcher';

export interface AppProps {
	fnr: string;
	enhet?: string;
}

const App = (props: AppProps) => {
	return (
		<main className="app veilarbmaofs">
			<StoreProvider fnr={props.fnr} enhetId={props.enhet}>
				<FeatureFetcher>
					<ViewController />
				</FeatureFetcher>
			</StoreProvider>
		</main>
	);
};

export default App;
