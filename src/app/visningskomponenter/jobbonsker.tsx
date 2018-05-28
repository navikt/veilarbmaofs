import * as React from 'react';

function Jobbonsker(props: { data: any }) {
    return (
        <>
            <p>Jobbønsker her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Jobbonsker;