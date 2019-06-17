import * as React from 'react';
import cls from 'classnames';
import TypografiBase from 'nav-frontend-typografi';

interface Props {
    header: string;
    headerTypo?: 'ingress' | 'element';
    children: React.ReactNode;
    className?: string;
}

function Informasjonsbolk(props: Props) {
    const { header, headerTypo = 'element', children, className, ...rest } = props;

    return (
        <div className={cls('informasjonsbolk', className)} {...rest}>
            <TypografiBase type={headerTypo}>{header}</TypografiBase>
            { children }
        </div>
    );
}

export default Informasjonsbolk;
