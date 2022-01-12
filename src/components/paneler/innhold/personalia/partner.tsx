import React from 'react';
import { PersonaliaPartner } from '../../../../rest/datatyper/personalia';
import { finnAldersTekst } from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { OrNothing } from '../../../../utils/felles-typer';
import { BodyShort } from '@navikt/ds-react';

function Partner(props: { partner: OrNothing<PersonaliaPartner> }) {
	const { partner, ...rest } = props;
	if (isNullOrUndefined(partner)) {
		return (
			<Informasjonsbolk header="Partner" {...rest}>
				{EMDASH}
			</Informasjonsbolk>
		);
	}
	const { harSammeBosted, sammensattNavn, fodselsnummer } = partner!;
	const borSammen = harSammeBosted ? 'Bor med partner' : 'Bor ikke med partner';
	const alder = finnAldersTekst(partner!);

	return (
		<Informasjonsbolk header="Partner" {...rest}>
			<BodyShort>{borSammen}</BodyShort>
			<BodyShort>{`${sammensattNavn} ${alder}`}</BodyShort>
			<BodyShort>{fodselsnummer}</BodyShort>
		</Informasjonsbolk>
	);
}

export default Partner;
