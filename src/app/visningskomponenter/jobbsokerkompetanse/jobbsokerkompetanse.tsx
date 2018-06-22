import * as React from 'react';
import { VisningKomponent } from '../../../config';
import Placeholder from './placeholder';

function Jobbsokerkompetanse(props: { data: any }) {
    return (
        <>
            <p>Jobbsøkerkompetanse her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

(Jobbsokerkompetanse as VisningKomponent).placeholder = Placeholder;

export default Jobbsokerkompetanse;