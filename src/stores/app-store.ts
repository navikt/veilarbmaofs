import { useState } from 'react';
import constate from 'constate';
import { Features } from '../rest/datatyper/feature';

export const [AppStoreProvider, useAppStore] = constate(
    (initalValues: { fnr: string; enhetId?: string, features: Features }) => {
        const [fnr, setFnr] = useState(initalValues.fnr);
        const [enhetId, setEnhetId] = useState(initalValues.enhetId);
        const [features, setFeatures] = useState(initalValues.features);
        return {fnr, setFnr, enhetId, setEnhetId, features, setFeatures};
    });
