import * as React from 'react';
import {Data} from "../persondetaljer/datafetcher";

function Ytelser(props: { data: Data[]}) {
    return (
        <>
            <p>Ytelser her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Ytelser;