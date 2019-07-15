import React, { useEffect } from 'react';
import { useFetchStoreContext } from './stores/fetch-store';

const Test = () => {
    const { registrering } = useFetchStoreContext();

    useEffect(() => {
        registrering.fetch({ fnr: '' });
    }, []);

    return (
        <div>
            <h1>Test</h1>
            {'STATUS: ' + registrering.status}
            <br/>
            {'DATA: ' + JSON.stringify(registrering.data)}
            <br/>
            {'ERROR: ' + registrering.error}
        </div>
    );
};

export default Test;
