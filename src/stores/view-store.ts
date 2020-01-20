import { useState } from 'react';
import createUseContext from 'constate';

export enum ViewType {
	DETALJER = 'DETALJER',
	TAG = 'TAG',
}

export const useViewStore = createUseContext(() => {
	const [view, setView] = useState<ViewType>(ViewType.DETALJER);
	return { view, changeView: setView };
});
