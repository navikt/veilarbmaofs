import * as React from 'react';

function Ytelser(props: { data: any }) {
    return (
        <>
            <p>Ytelser her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Ytelser;