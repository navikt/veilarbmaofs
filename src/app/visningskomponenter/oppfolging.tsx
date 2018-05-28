import * as React from 'react';

function Oppfolging(props: { data: any }) {
    return (
        <>
            <p>Oppfolging her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Oppfolging;