import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { safeMap } from '../../utils';
import Informasjonsbolk from './informasjonsbolk';

interface Props<T> {
	header: string;
	list: T[];
}

function InformasjonsbolkListe<T>(props: Props<T>) {
	const { header, list, ...rest } = props;

	const elementer = safeMap(list, (element: T) => <Normaltekst key={element as any}>{element}</Normaltekst>);

	return (
		<Informasjonsbolk header={header} {...rest}>
			{elementer}
		</Informasjonsbolk>
	);
}

export default InformasjonsbolkListe;
