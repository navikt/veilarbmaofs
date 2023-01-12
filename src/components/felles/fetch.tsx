import React from 'react';
import { Alert, BodyShort, Loader } from '@navikt/ds-react';
import cls from 'classnames';
import './fetch.less';

export const Feilmelding = (props: { children?: any }) => (
	<Alert variant="warning" className="alertstripe_intern">
		{props.children ? props.children : 'Kunne ikke laste data, prøv på nytt ...'}
	</Alert>
);

export const Laster = (props: { midtstilt?: boolean }) => (
	<div className={cls({ 'veilarbmaofs__laster--midtstilt': props.midtstilt })}>
		<Loader size="2xlarge" />
	</div>
);

export const NoData = (props: { tekst?: string }) => (
	<BodyShort>{props.tekst ? props.tekst : 'Ingen data tilgjengelig'}</BodyShort>
);
