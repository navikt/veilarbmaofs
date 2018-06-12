import * as React from 'react';

function Registerering(props: { data: any }) {
    return (
        <>
            <p>Registrering her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Registerering;