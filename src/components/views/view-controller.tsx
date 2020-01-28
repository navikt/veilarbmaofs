import React from 'react';
import { useViewStore, ViewType } from '../../stores/view-store';
import { DetaljerView } from './detaljer-view';
import { TilretteleggingsbehovView } from './tilretteleggingsbehov-view';
import { useEventListener } from '../../utils';

export function ViewController() {
	const { view } = useViewStore();
	const { changeView } = useViewStore();

	useEventListener('veilarbmaofs.visDetaljer', () => changeView(ViewType.DETALJER));
	useEventListener('veilarbmaofs.visTilretteleggingsbehov', () => changeView(ViewType.TILRETTELEGGINGSBEHOV));

	return (
		<>
			<DetaljerView  hidden={view !== ViewType.DETALJER} />
			<TilretteleggingsbehovView hidden={view !== ViewType.TILRETTELEGGINGSBEHOV} />
		</>
	);
}
