import React from 'react';
import Sivilstand from './sivilstand';
import Barn from './barn';
import { kalkulerAlder } from '../../../../utils/date-utils';
import { PersonaliaSivilstand, PersonsBarn } from '../../../../rest/datatyper/personaliav2';

function FamilieInfo(props: { sivilstand: PersonaliaSivilstand[]; barn: PersonsBarn[] }) {
	const { sivilstand, barn, ...rest } = props;

	const MAX_ALDER_BARN = 21;
	const filtrertBarneListe =
		barn && barn.filter(enkeltBarn => kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN);

	return (
		<div {...rest}>
			<Sivilstand sivilstand={sivilstand} />
			<Barn barn={filtrertBarneListe} />
		</div>
	);
}

export default FamilieInfo;
