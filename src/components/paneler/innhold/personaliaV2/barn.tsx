import React from 'react';
import { finnAldersTekst } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';
import {Gradering, PersonaliaV2Info, PersonsBarn} from '../../../../rest/datatyper/personaliav2';
import EMDASH from "../../../../utils/emdash";
import { isNotEmptyArray } from "../../../../utils";
import { graderingBeskrivelse } from "../../../../utils/konstanter";

function BorSammen(props: { barn: PersonsBarn }) {
	const { dodsdato, harSammeBosted } = props.barn;

	if (dodsdato) {
		return null;
	}

	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';

	return <Normaltekst>{borSammen}</Normaltekst>;
}

function EnkeltBarn(props: { barn: PersonsBarn }) {
	const { fornavn, fodselsdato, gradering, erEgenAnsatt, harVeilederTilgang } = props.barn;
	const alder = finnAldersTekst(props.barn);
	console.log('harVeilederTilgang:',harVeilederTilgang, 'egenAnsatt: ', erEgenAnsatt, 'erEgenAnsatt && !harVeilederTilgang: ', erEgenAnsatt && !harVeilederTilgang);
	return (
		<div className="overinformasjon underinformasjon">
			{ erEgenAnsatt && !harVeilederTilgang ?
				<div>
					<Normaltekst>{alder}</Normaltekst>
					<BorSammen barn={props.barn} />
				</div>
				: gradering !== Gradering.UGRADERT && !harVeilederTilgang ?
					graderingBeskrivelse(gradering)
					:
					<div>
						<Normaltekst>{fornavn}, {alder}</Normaltekst>
						<Normaltekst>{fodselsdato}</Normaltekst>
						<BorSammen barn={props.barn} />
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
					</div>
			}
		</div>
	);
}

function Barn(props: Pick<PersonaliaV2Info, 'barn'>) {
	const { barn, ...rest } = props;

	const barnListe = isNotEmptyArray(barn) ? barn.map(ettBarn => <EnkeltBarn barn={ettBarn} key={ettBarn.fodselsnummer} />) : EMDASH;

	return (
		<Informasjonsbolk header="Barn under 21 år" {...rest}>
			{barnListe}
		</Informasjonsbolk>
	);
}

export default Barn;
