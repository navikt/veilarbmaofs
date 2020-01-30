import React from 'react';
import cls from 'classnames';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Normaltekst } from 'nav-frontend-typografi';
import './fetch.less';

export const Feilmelding = (props: { tekst?: string }) => (
	<AlertStripeAdvarsel>{props.tekst ? props.tekst : 'Kunne ikke laste data, prøv på nytt ...'}</AlertStripeAdvarsel>
);

export const Laster = (props: { midtstilt?: boolean }) => (
	<div className={cls({ 'veilarbmaofs__laster--midtstilt': props.midtstilt })}>
		<NavFrontendSpinner type="XL" />
	</div>
);

export const NoData = (props: { tekst?: string }) => (
	<Normaltekst>{props.tekst ? props.tekst : 'Ingen data tilgjengelig'}</Normaltekst>
);
