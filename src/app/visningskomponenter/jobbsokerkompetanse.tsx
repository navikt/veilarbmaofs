import * as React from 'react';

function Jobbsokerkompetanse(props: { data: any }) {
    return (
        <>
            <p>Jobbsøkerkompetanse her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Jobbsokerkompetanse;