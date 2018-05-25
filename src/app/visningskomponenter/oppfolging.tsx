import * as React from 'react';
import {Data} from "../persondetaljer/datafetcher";

function Oppfolging(props: { data: Data[]}) {
    return (
        <>
            <p>Oppfolging her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Oppfolging;