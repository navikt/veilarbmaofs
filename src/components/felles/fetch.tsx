import React from 'react';
import cls from 'classnames';
import './fetch.less';
import { Alert, BodyShort, Loader } from '@navikt/ds-react';

export const Feilmelding = (props: { tekst?: string }) => (
	<Alert variant="warning">{props.tekst ? props.tekst : 'Kunne ikke laste data, prøv på nytt ...'}</Alert>
);

export const Laster = (props: { midtstilt?: boolean }) => (
	<div className={cls({ 'veilarbmaofs__laster--midtstilt': props.midtstilt })}>
		<Loader size="xlarge" />
	</div>
);

export const NoData = (props: { tekst?: string }) => (
	<BodyShort>{props.tekst ? props.tekst : 'Ingen data tilgjengelig'}</BodyShort>
);
