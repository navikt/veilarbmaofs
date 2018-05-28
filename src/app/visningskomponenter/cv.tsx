import * as React from 'react';

function CV(props: { data: any}) {
    return (
        <>
            <p>CV her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default CV;