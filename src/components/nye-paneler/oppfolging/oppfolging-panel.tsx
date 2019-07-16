import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { hasData } from '../../../rest/utils';

const OppfolgingPanel = () => {
    const { oppfolging } = useFetchStoreContext();

    useEffect(() => {

        if (!hasData(oppfolging)) {
            oppfolging.fetch({ fnr: ''});
        }

    }, []);

    return (
        <Panel name="oppfolging" tittel="Oppfølging">
            <h1>oppfolging</h1>
        </Panel>
    );
};

export default OppfolgingPanel;
