import * as React from 'react';
import { IRegisteringJobbonskerData } from '../datatyper';

export interface IJobbonskerData {
    jobbonsker: IRegisteringJobbonskerData;
}

interface IProps {
    data: IJobbonskerData;
}

function Jobbonsker(props: IProps) {
    return (
        <>
            <p>Jobbønsker her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Jobbonsker;
