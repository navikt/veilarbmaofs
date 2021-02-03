import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaPartner } from '../../../../rest/datatyper/personaliav2';
import { finnAldersTekstV2 } from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { OrNothing } from '../../../../utils/felles-typer';

function Partner(props: { partner: OrNothing<PersonaliaPartner> }) {
	const { partner, ...rest } = props;
	if (isNullOrUndefined(partner)) {
		return (
			<Informasjonsbolk header="Partner" {...rest}>
				{EMDASH}
			</Informasjonsbolk>
		);
	}
	const { harSammeBosted, forkortetNavn , fodselsnummer } = partner!;
	const borSammen = harSammeBosted ? 'Bor med partner' : 'Bor ikke med partner';
	const alder = finnAldersTekstV2(partner!);

	return (
		<Informasjonsbolk header="Partner" {...rest}>
			<Normaltekst>{borSammen}</Normaltekst>
			<Normaltekst>{`${forkortetNavn} ${alder}`}</Normaltekst>
			<Normaltekst>{fodselsnummer}</Normaltekst>
		</Informasjonsbolk>
	);
}

export default Partner;
