import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaPartner } from '../../../../rest/datatyper/personaliav2';
import { finnAldersTekst } from '../../../../utils/date-utils';
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
	const { harSammeBosted, fornavn, etternavn, fodselsnummer } = partner!;
	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';
	const alder = finnAldersTekst(partner!);

	return (
		<Informasjonsbolk header="Partner" className="overinformasjon" {...rest}>
			<Normaltekst>{`${fornavn} ${etternavn} ${alder}`}</Normaltekst>
			<Normaltekst>{fodselsnummer}</Normaltekst>
			<Normaltekst>{borSammen}</Normaltekst>
		</Informasjonsbolk>
	);
}

export default Partner;
