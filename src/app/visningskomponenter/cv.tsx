import * as React from 'react';
import {Data} from "../persondetaljer/datafetcher";

function CV(props: { data: Data[]}) {
    return (
        <>
            <p>CV her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default CV;