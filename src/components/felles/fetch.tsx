import React from 'react';
import cls from 'classnames';
import { AlertStripeAdvarselSolid } from 'nav-frontend-alertstriper';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Normaltekst } from 'nav-frontend-typografi';
import './fetch.less';

export const Feilmelding = (props: { tekst?: string }) => (
    <AlertStripeAdvarselSolid>
        {props.tekst ? props.tekst : 'Kunne ikke laste data, prøv på nytt ...'}
    </AlertStripeAdvarselSolid>
);

export const Laster = (props: { midtstilt?: boolean }) => (
    <div className={cls({ 'laster--midtstilt': props.midtstilt })}>
        <NavFrontendSpinner type="XL"/>
    </div>
);

export const NoData = (props: { tekst?: string }) => (
    <Normaltekst>
        {props.tekst ? props.tekst : 'Ingen data tilgjengelig'}
    </Normaltekst>
);
