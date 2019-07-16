import React from 'react';
import { FetchState, isAnyNotStartedOrPending } from '../../rest/utils';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface LasterProps {
    avhengigheter: FetchState | FetchState[];
    children?: any;
}

export const Laster = (props: LasterProps) => {
    if (isAnyNotStartedOrPending(props.avhengigheter)) {
        return <NavFrontendSpinner type="XL"/>;
    }

    return typeof props.children === 'function' ? props.children() : props.children;
};
