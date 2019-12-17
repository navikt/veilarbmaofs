import React, { useEffect, useState } from 'react';
import StoreProvider from './stores/store-provider';
import { Paneler } from './components/paneler/paneler';
import { cache, isPending } from '@nutgaard/use-fetch';
import { useFetchOppfolgingsstatus } from './rest/api';
import { Laster } from './components/felles/fetch';
import './app.less';

export interface AppProps {
	fnr: string;
	enhet?: string;
}

const App = (props: AppProps) => {
	const oppfolgingstatus = useFetchOppfolgingsstatus(props.fnr);
	const [renderKey, setRenderKey] = useState(0);

	function rerender() {
		cache.clear();
		setRenderKey(key => key + 1);
	}

	useEffect(() => {
		window.addEventListener('rerenderMao', rerender);
		return () => window.removeEventListener('rerenderMao', rerender);
	}, []);

	return (
		<StoreProvider fnr={props.fnr} enhetId={props.enhet}>
			<div className="veilarbmaofs">
				<div className="veilarbmaofs__container">
					{isPending(oppfolgingstatus) ? <Laster midtstilt={true} /> : <Paneler key={renderKey} />}
				</div>
			</div>
		</StoreProvider>
	);
};

export default App;
