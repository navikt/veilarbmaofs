import React from 'react';
import { useViewStore, ViewType } from '../../stores/view-store';
import { DetaljerView } from './detaljer-view';
import { TagView } from './tag-view';
import { useEventListener } from '../../utils';

export function ViewController() {
	const { view } = useViewStore();
	const { changeView } = useViewStore();

	useEventListener('visDetaljer', () => changeView(ViewType.DETALJER));

	switch (view) {
		case ViewType.DETALJER:
			return <DetaljerView />;
		case ViewType.TAG:
			return <TagView />;
		default:
			return <DetaljerView />;
	}
}
