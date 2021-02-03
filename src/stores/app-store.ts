import { useState } from 'react';
import constate from 'constate';

export const [AppStoreProvider, useAppStore] = constate((initalValues: { fnr: string; enhetId?: string }) => {
	const [fnr, setFnr] = useState(initalValues.fnr);
	const [enhetId, setEnhetId] = useState(initalValues.enhetId);
	return { fnr, setFnr, enhetId, setEnhetId };
});
