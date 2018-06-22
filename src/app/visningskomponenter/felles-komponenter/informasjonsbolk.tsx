import * as React from 'react';

import { Element } from 'nav-frontend-typografi';

interface IProps {
    header: string;
    children: React.ReactNode;
}

function Informasjonsbolk(props: IProps) {
    const { header, children, ...rest } = props;

    return (
        <div className="informasjonsbolk" {...rest}>
            <Element>{header}</Element>
            { children }
        </div>
    );
}

export default Informasjonsbolk;