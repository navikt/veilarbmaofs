import * as React from 'react';
import { IRegisteringData } from '../datatyper';

export interface IRegistereringData {
    registering: IRegisteringData;
}

interface IProps {
    data: IRegistereringData;
}

function Registerering(props: IProps) {
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
