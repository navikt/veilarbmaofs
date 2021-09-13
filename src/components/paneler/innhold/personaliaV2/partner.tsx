import React from 'react';
import {Normaltekst} from 'nav-frontend-typografi';
import {Gradering, PersonaliaPartner} from '../../../../rest/datatyper/personaliav2';
import {finnAldersTekst} from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import {isNullOrUndefined} from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import {OrNothing} from '../../../../utils/felles-typer';
import {graderingBeskrivelse} from "../../../../utils/konstanter";

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
	const alder = finnAldersTekst(partner!);

	return (
		<Informasjonsbolk header="Partner" className="overinformasjon" {...rest}>
			{ erEgenAnsatt && !harVeilederTilgang ?
					<Normaltekst>{borSammen}</Normaltekst>
				: gradering !== Gradering.UGRADERT && !harVeilederTilgang ?
					graderingBeskrivelse(gradering)
					:
					<div>
						<Normaltekst>{`${forkortetNavn} (${alder})`}</Normaltekst>
						<Normaltekst>{borSammen}</Normaltekst>
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
					</div>
			}
		</Informasjonsbolk>
	);
}

export default Partner;
