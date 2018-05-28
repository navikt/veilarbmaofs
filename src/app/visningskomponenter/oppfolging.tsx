import * as React from 'react';
import { IFOOppfolgingData } from '../datatyper';

export interface IOppfolgingData {
    oppfolging: IFOOppfolgingData;
}

interface IProps {
    data: IOppfolgingData;
}

function Oppfolging(props: IProps) {
    return (
        <>
            <p>Oppfolging her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Oppfolging;
