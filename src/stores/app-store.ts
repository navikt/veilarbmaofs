import { useState } from 'react';
import createUseContext from 'constate';

function useAppStore() {
    const [fnr, setFnr] = useState('');
    return { fnr, setFnr };
}

export const useAppStoreContext = createUseContext(useAppStore);
