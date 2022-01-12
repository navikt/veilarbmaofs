import React from 'react';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { visEmdashHvisNull } from '../../../../utils';
import { BodyShort } from '@navikt/ds-react';

function Sammendrag(props: Pick<ArenaPerson, 'sammendrag'>) {
	return (
		<Informasjonsbolk header="Sammendrag" headerTypo="ingress">
			<BodyShort className="underinformasjon cv-sammendrag">{visEmdashHvisNull(props.sammendrag)}</BodyShort>
		</Informasjonsbolk>
	);
}

export default Sammendrag;
