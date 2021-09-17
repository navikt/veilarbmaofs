import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { Gradering, PersonaliaPartner } from '../../../../rest/datatyper/personaliav2';
import {finnAldersTekst} from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import { formateFirstCharOfEachWordInUppercase, isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { OrNothing } from '../../../../utils/felles-typer';
import {graderingBeskrivelse, graderingKode} from "../../../../utils/konstanter";
import {EtikettAdvarsel} from "nav-frontend-etiketter";

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
				<div>
					<Normaltekst>{borSammen}</Normaltekst>
					<EtikettAdvarsel mini>Egen ansatt</EtikettAdvarsel>
				</div>
				: gradering !== Gradering.UGRADERT && !harVeilederTilgang ?
					<div>
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
						<EtikettAdvarsel mini>{graderingKode(gradering)}</EtikettAdvarsel>
					</div>
					:
					<div>
						<Normaltekst>{`${formateFirstCharOfEachWordInUppercase(forkortetNavn)} (${alder})`}</Normaltekst>
						<Normaltekst>{borSammen}</Normaltekst>
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
						<EtikettAdvarsel mini>{graderingKode(gradering)}</EtikettAdvarsel>
					</div>
			}
		</Informasjonsbolk>
	);
}

export default Partner;
