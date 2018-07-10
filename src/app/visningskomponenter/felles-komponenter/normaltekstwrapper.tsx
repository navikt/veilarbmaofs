import Normaltekst from "nav-frontend-typografi/lib/normaltekst";
import * as React from 'react';

interface ChildProps {
    children?: React.ReactNode
}

function notNullChildren<T>(Comp: React.ComponentType<T & ChildProps>) {
    return (props: T & ChildProps) => {
        if (!props.children) {
            return null;
        }
        return <Comp {...props}/>;
    }
}

const NormalTekstWrapper = notNullChildren(Normaltekst);

export default NormalTekstWrapper;