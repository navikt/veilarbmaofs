import React from 'react';
import { Gradering, PersonaliaPartner } from '../../../../rest/datatyper/personaliav2';
import { finnAlder } from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import { formateFirstCharOfEachWordToUppercase, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { OrNothing } from '../../../../utils/felles-typer';
import { graderingBeskrivelse } from '../../../../utils/konstanter';
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
	const { harSammeBosted, forkortetNavn, gradering, erEgenAnsatt, harVeilederTilgang } = partner!;
	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';
	const alder = finnAlder(partner!);

	return (
		<Informasjonsbolk header="Partner" className="overinformasjon" {...rest}>
			{erEgenAnsatt && !harVeilederTilgang ? (
				<div>
					<BodyShort>{borSammen}</BodyShort>
				</div>
			) : gradering !== Gradering.UGRADERT && !harVeilederTilgang ? (
				<BodyShort>{graderingBeskrivelse(gradering)}</BodyShort>
			) : (
				<div>
					<BodyShort>{`${formateFirstCharOfEachWordToUppercase(forkortetNavn)} (${alder})`}</BodyShort>
					<BodyShort>{borSammen}</BodyShort>
					<BodyShort>{graderingBeskrivelse(gradering)}</BodyShort>
				</div>
			)}
		</Informasjonsbolk>
	);
}

export default Partner;
