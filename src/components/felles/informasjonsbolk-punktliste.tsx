import React from 'react';
import { safeMap } from '../../utils';
import Informasjonsbolk from './informasjonsbolk';
import { BodyShort } from '@navikt/ds-react';

interface Props<T> {
	header: string;
	list: T[];
	className?: string;
}

function InformasjonsbolkPunktliste<T>(props: Props<T>) {
	const { header, list, className, ...rest } = props;

	const elementer = safeMap(list, (element: T, index: number) => (
		<li key={index}>
			<BodyShort key={element as any}>{element}</BodyShort>
		</li>
	));

	return (
		<Informasjonsbolk header={header} {...rest} className={className}>
			<ul>{elementer}</ul>
		</Informasjonsbolk>
	);
}

export default InformasjonsbolkPunktliste;
