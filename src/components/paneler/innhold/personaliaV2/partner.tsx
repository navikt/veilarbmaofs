import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { Gradering, PersonaliaPartner } from '../../../../rest/datatyper/personaliav2';
import { finnAlder } from '../../../../utils/date-utils';
import EMDASH from '../../../../utils/emdash';
import {
	formateFirstCharOfEachWordToUppercase,
	isNullOrUndefined
} from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { OrNothing } from '../../../../utils/felles-typer';
import {EtikettAdvarsel} from "nav-frontend-etiketter";
import { etikettGradering } from "./etikett-gradering";

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
			{ erEgenAnsatt && !harVeilederTilgang ?
				<div>
					<Normaltekst>{borSammen}</Normaltekst>
					<EtikettAdvarsel mini>Egen ansatt</EtikettAdvarsel>
				</div>
				: gradering !== Gradering.UGRADERT && !harVeilederTilgang ?
					<div>{etikettGradering(gradering)}</div>
					:
					<div>
						<Normaltekst>{`${formateFirstCharOfEachWordToUppercase(forkortetNavn)} (${alder})`}</Normaltekst>
						<Normaltekst>{borSammen}</Normaltekst>
						{gradering !== Gradering.UGRADERT && etikettGradering(gradering)}
					</div>
			}
		</Informasjonsbolk>
	);
}

export default Partner;
