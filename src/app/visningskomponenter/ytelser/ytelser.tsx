import * as React from 'react';
import { VisningKomponent } from '../../../config';
import Placeholder from './placeholder';

function Ytelser(props: { data: any }) {
    return (
        <>
            <p>Ytelser her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

(Ytelser as VisningKomponent).placeholder = Placeholder;

export default Ytelser;