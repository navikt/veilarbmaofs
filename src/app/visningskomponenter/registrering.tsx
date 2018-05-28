import * as React from 'react';

function Registerering(props: { data: any }) {
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