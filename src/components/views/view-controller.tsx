import React from 'react';
import { useViewStore, ViewType } from '../../stores/view-store';
import { DetaljerView } from './detaljer-view';
import { TilretteleggingsbehovView } from './tilretteleggingsbehov-view';
import { useEventListener } from '../../utils';
import { View } from './view';

export function ViewController() {
	const { view } = useViewStore();
	const { changeView } = useViewStore();

	useEventListener('veilarbmaofs.visDetaljer', () => changeView(ViewType.DETALJER));
	useEventListener('veilarbmaofs.visTilretteleggingsbehov', () => changeView(ViewType.TILRETTELEGGINGSBEHOV));

	return (
		<>
			<View hidden={view !== ViewType.DETALJER} className="veilarbmaofs">
				<DetaljerView />
			</View>
			<View hidden={view !== ViewType.TILRETTELEGGINGSBEHOV}>
				<TilretteleggingsbehovView />
			</View>
		</>
	);
}
