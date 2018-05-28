import * as React from 'react';
import { IPamCVData } from '../datatyper';

export interface ICVData {
    cv: IPamCVData;
}

interface IProps {
    data: ICVData;
}

function CV(props: IProps) {
    return (
        <>
            <p>CV her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default CV;
