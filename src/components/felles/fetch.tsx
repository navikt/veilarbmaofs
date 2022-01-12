import React from 'react';
import cls from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import './fetch.less';
import { Alert, Loader } from '@navikt/ds-react';

export const Feilmelding = (props: { tekst?: string }) => (
	<Alert variant="warning">{props.tekst ? props.tekst : 'Kunne ikke laste data, prøv på nytt ...'}</Alert>
);

export const Laster = (props: { midtstilt?: boolean }) => (
	<div className={cls({ 'veilarbmaofs__laster--midtstilt': props.midtstilt })}>
		<Loader size="xlarge" />
	</div>
);

export const NoData = (props: { tekst?: string }) => (
	<Normaltekst>{props.tekst ? props.tekst : 'Ingen data tilgjengelig'}</Normaltekst>
);
