import React from 'react';
import { FetchState, hasAnyFailed } from '../../rest/utils';
import { AlertStripeAdvarselSolid } from 'nav-frontend-alertstriper';

interface FeilmeldingProps {
    avhengigheter: FetchState | FetchState[];
    children?: any;
}

export const Feilmelding = (props: FeilmeldingProps) => {
    if (hasAnyFailed(props.avhengigheter)) {
        return <AlertStripeAdvarselSolid>Kunne ikke laste data, prøv på nytt ...</AlertStripeAdvarselSolid>;
    }

    return typeof props.children === 'function' ? props.children() : props.children;
};
