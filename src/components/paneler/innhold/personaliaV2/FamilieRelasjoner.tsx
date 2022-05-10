import React from 'react';
import Sivilstand from './sivilstand';
import Barn from './barn';
import { kalkulerAlder } from '../../../../utils/date-utils';
import {
	PersonaliaPartner,
	PersonaliaSivilstand,
	PersonaliaSivilstandNy,
	PersonsBarn
} from '../../../../rest/datatyper/personaliav2';

function FamilieInfo(props: {
	partner?: PersonaliaPartner;
	sivilstand?: PersonaliaSivilstand;
	sivilstandliste?: PersonaliaSivilstandNy[];
	barn: PersonsBarn[];
}) {
	const { partner, sivilstand, sivilstandliste, barn, ...rest } = props;
	const MAX_ALDER_BARN = 21;
	const filtrertBarneListe =
		barn && barn.filter(enkeltBarn => kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN);

	return (
		<div {...rest}>
			<Sivilstand partner={partner} sivilstand={sivilstand} sivilstandliste={sivilstandliste} />
			<Barn barn={filtrertBarneListe} />
		</div>
	);
}

export default FamilieInfo;
