import Normaltekst from 'nav-frontend-typografi/lib/normaltekst';
import React from 'react';
import EMDASH from '../../utils/emdash';

interface ChildProps {
    children?: React.ReactNode;
}

function notNullChildren<T>(Comp: React.ComponentType<T & ChildProps>) {
    return (props: T & ChildProps) => {
        if (!props.children) {
            return <>{EMDASH}</>;
        }
        return <Comp {...props}/>;
    };
}

const NormalTekstWrapper = notNullChildren(Normaltekst);

export default NormalTekstWrapper;
