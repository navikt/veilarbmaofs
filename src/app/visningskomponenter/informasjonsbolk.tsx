import * as React from 'react';
import {CSSProperties} from "react";

interface IProps {
    header?: string;
    style?: CSSProperties;
    children: React.ReactNode;
}

function Informasjonsbolk(props: IProps) {
    const overskrift = <div className="typo-systemtittel">
        {props.header}
    </div>;

    return (
        <div className="informasjonsbolk" style={props.style}>
            { props.header ? overskrift : null }
            { props.children }
        </div>
    );
}

export default Informasjonsbolk;