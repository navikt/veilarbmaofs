import * as React from 'react';
import { IFOKompetanseData } from '../datatyper';

export interface IKompetanseData {
    jobbsokerkompetanse: IFOKompetanseData;
}

interface IProps {
    data: IKompetanseData;
}

function Jobbsokerkompetanse(props: IProps) {
    return (
        <>
            <p>Jobbsøkerkompetanse her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Jobbsokerkompetanse;
