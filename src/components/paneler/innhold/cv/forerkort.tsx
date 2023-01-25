import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { safeMap, visEmdashHvisNull } from '../../../../utils';
import { ReactComponent as Forerkortikon } from './ikoner/forerkort.svg';
import { BodyShort } from '@navikt/ds-react';

type Props = Pick<ArenaPerson, 'forerkort'>;

function Forerkort(props: Props) {
	const { forerkort, ...rest } = props;
	const forerkortListe = safeMap(forerkort, (enkeltForerkort, index) => (
		<BodyShort key={`forerkort-${index}`}>Klasse {visEmdashHvisNull(enkeltForerkort.klasse)}</BodyShort>
	));

	return (
		<Informasjonsbolk header="Førerkort" headerTypo="ingress" icon={<Forerkortikon />} {...rest}>
			{forerkortListe}
		</Informasjonsbolk>
	);
}

export default Forerkort;
