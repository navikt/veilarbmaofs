import * as React from 'react';
import {CSSProperties} from "react";

interface IProps {
    header: string;
    style?: CSSProperties;
    children: React.ReactNode;
}

function Informasjonsbolk(props: IProps) {
    return (
        <div className="informasjonsbolk" style={props.style}>
            <div className="typo-systemtittel">
                {props.header}
            </div>
            {props.children}
        </div>
    )
}

export default Informasjonsbolk;