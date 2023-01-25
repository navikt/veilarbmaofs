import { safeMap } from '../../utils';
import Informasjonsbolk from './informasjonsbolk';
import { BodyShort } from '@navikt/ds-react';

interface Props<T> {
	header: string;
	list: T[];
}

function InformasjonsbolkListe<T>(props: Props<T>) {
	const { header, list, ...rest } = props;

	const elementer = safeMap(list, (element: T) => <BodyShort key={element as any}>{element}</BodyShort>);

	return (
		<Informasjonsbolk header={header} {...rest}>
			{elementer}
		</Informasjonsbolk>
	);
}

export default InformasjonsbolkListe;
