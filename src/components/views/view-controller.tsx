import React from 'react';
import { useViewStore, ViewType } from '../../stores/view-store';
import { DetaljerView } from './detaljer-view';
import { TilretteleggingsbehovView } from './tilretteleggingsbehov-view';
import { useEventListener } from '../../utils';

export function ViewController() {
	const { view } = useViewStore();
	const { changeView } = useViewStore();

	useEventListener('visDetaljerSpa', () => changeView(ViewType.DETALJER));
	useEventListener('visDetaljer', () => changeView(ViewType.TILRETTELEGGINGSBEHOV));

	switch (view) {
		case ViewType.DETALJER:
			return <DetaljerView />;
		case ViewType.TILRETTELEGGINGSBEHOV:
			return <TilretteleggingsbehovView />;
		default:
			return <DetaljerView />;
	}
}
