import React, { useState } from 'react';
import StoreProvider from './stores/store-provider';
import { cache } from '@nutgaard/use-fetch';
import { ViewController } from './components/views/view-controller';
import { useEventListener } from './utils';
import './app.less';

export interface AppProps {
	fnr: string;
	enhet?: string;
}

const App = (props: AppProps) => {
	const [renderKey, setRenderKey] = useState(0);

	function rerender() {
		cache.clear();
		setRenderKey(key => key + 1);
	}

	useEventListener('rerenderMao', rerender);

	return (
		<StoreProvider fnr={props.fnr} enhetId={props.enhet}>
			<ViewController key={renderKey} />
		</StoreProvider>
	);
};

export default App;
