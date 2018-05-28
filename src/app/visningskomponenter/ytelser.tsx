import * as React from 'react';
import { IArenaYtelserData } from '../datatyper';

export interface IYtelserData {
    ytelser: IArenaYtelserData;
}

interface IProps {
    data: IYtelserData;
}

function Ytelser(props: IProps) {
    return (
        <>
            <p>Ytelser her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Ytelser;
