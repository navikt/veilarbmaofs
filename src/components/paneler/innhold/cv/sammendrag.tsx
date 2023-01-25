import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { visEmdashHvisNull } from '../../../../utils';
import { List } from '@navikt/ds-icons';
import { BodyShort } from '@navikt/ds-react';

function Sammendrag(props: Pick<ArenaPerson, 'sammendrag'>) {
	return (
		<Informasjonsbolk header="Sammendrag" headerTypo="ingress" icon={<List />}>
			<BodyShort className="underinformasjon cv-sammendrag">{visEmdashHvisNull(props.sammendrag)}</BodyShort>
		</Informasjonsbolk>
	);
}

export default Sammendrag;
