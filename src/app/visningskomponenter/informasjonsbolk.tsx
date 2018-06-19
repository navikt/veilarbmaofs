import * as React from 'react';

import { Systemtittel } from 'nav-frontend-typografi';

interface IProps {
    header?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

function Informasjonsbolk(props: IProps) {
    const overskrift = <Systemtittel>{props.header}</Systemtittel>;

    return (
        <div className="informasjonsbolk" style={props.style}>
            { props.header ? overskrift : null }
            { props.children }
        </div>
    );
}

export default Informasjonsbolk;