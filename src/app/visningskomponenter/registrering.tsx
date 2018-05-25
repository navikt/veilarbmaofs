import * as React from 'react';
import { Data } from "../persondetaljer/datafetcher";

function Registerering(props: { data: Data[]}) {
    // if (!!true) {
    //     throw new Error('nei nei nei');
    // }

    return (
        <>
            <p>Registrering her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Registerering;