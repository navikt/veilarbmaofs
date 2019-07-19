import React from 'react';
import { AlertStripeAdvarselSolid } from 'nav-frontend-alertstriper';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Normaltekst } from 'nav-frontend-typografi';

export const Feilmelding = (props: { tekst?: string }) => (
    <AlertStripeAdvarselSolid>
        {props.tekst ? props.tekst : 'Kunne ikke laste data, prøv på nytt ...'}
    </AlertStripeAdvarselSolid>
);

export const Laster = () => <NavFrontendSpinner type="XL"/>;

export const NoData = (props: { tekst?: string }) => (
    <Normaltekst>
        {props.tekst ? props.tekst : 'Ingen data tilgjengelig'}
    </Normaltekst>
);
