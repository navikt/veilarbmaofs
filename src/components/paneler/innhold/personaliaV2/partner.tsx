import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { Gradering, PersonaliaPartner } from '../../../../rest/datatyper/personaliav2';
import { finnAlder } from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import { formateFirstCharOfEachWordToUppercase, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { OrNothing } from '../../../../utils/felles-typer';
import { graderingBeskrivelse } from '../../../../utils/konstanter';

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
			<div className="innrykk">
				{erEgenAnsatt && !harVeilederTilgang ? (
					<div>
						<Normaltekst>{borSammen}</Normaltekst>
					</div>
				) : gradering !== Gradering.UGRADERT && !harVeilederTilgang ? (
					<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
				) : (
					<div>
						<Normaltekst>{`${formateFirstCharOfEachWordToUppercase(
							forkortetNavn
						)} (${alder})`}</Normaltekst>
						<Normaltekst>{borSammen}</Normaltekst>
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
					</div>
				)}
			</div>
		</Informasjonsbolk>
	);
}

export default Partner;
