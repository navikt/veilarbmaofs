import { useState } from 'react';
import createUseContext from 'constate';

function useAppStore(initalValues: { fnr: string, enhetId?: string}) {
    const [fnr, setFnr] = useState(initalValues.fnr);
    const [enhetId, setEnhetId] = useState(initalValues.enhetId);
    return { fnr, setFnr, enhetId, setEnhetId};
}

export const useAppStoreContext = createUseContext(useAppStore);
