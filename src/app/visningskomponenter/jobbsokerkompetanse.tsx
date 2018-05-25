import * as React from 'react';
import {Data} from "../persondetaljer/datafetcher";

function Jobbsokerkompetanse(props: { data: Data[]}) {
    return (
        <>
            <p>Jobbsøkerkompetanse her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Jobbsokerkompetanse;