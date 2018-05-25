import * as React from 'react';
import {Data} from "../persondetaljer/datafetcher";

function Personalia(props: { data: Data[]}) {
    return (
        <>
            <p>Personalia her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Personalia;