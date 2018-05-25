import * as React from 'react';
import {Data} from "../persondetaljer/datafetcher";

function Jobbonsker(props: { data: Data[]}) {
    return (
        <>
            <p>Jobbønsker her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Jobbonsker;