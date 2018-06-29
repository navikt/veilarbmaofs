import * as cls from"classnames";
import { Element } from 'nav-frontend-typografi';
import * as React from 'react';

interface Props {
    header: string;
    children: React.ReactNode;
    className?: string;
}

function Informasjonsbolk(props: Props) {
    const { header, children, className, ...rest } = props;

    return (
        <div className={cls("informasjonsbolk", className)} {...rest}>
            <Element>{header}</Element>
            { children }
        </div>
    );
}

export default Informasjonsbolk;