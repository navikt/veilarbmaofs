import { useState } from 'react';
import constate from 'constate';
import { initialFeatures } from '../rest/datatyper/feature';

export const [AppStoreProvider, useAppStore] = constate(
    (initalValues: { fnr: string; enhetId?: string }) => {
        const [fnr, setFnr] = useState(initalValues.fnr);
        const [enhetId, setEnhetId] = useState(initalValues.enhetId);
        const [features, setFeatures] = useState(initialFeatures);
        return {fnr, setFnr, enhetId, setEnhetId, features, setFeatures};
    });
