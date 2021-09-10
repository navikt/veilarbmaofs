import React from 'react';
import { finnAldersTekst } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';
import {Gradering, PersonaliaV2Info, PersonsBarn} from '../../../../rest/datatyper/personaliav2';
import EMDASH from "../../../../utils/emdash";
import {formaterDato, isNotEmptyArray} from "../../../../utils";
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
	const { fornavn, kjonn, fodselsdato, gradering, erEgenAnsatt, harVeilederTilgang } = props.barn;
	const alder = finnAldersTekst(props.barn);
	const lesbartKjonn = kjonn === 'M' ? 'Gutt' : 'Jente';

	return (
		<div className="overinformasjon underinformasjon">
			{ erEgenAnsatt && !harVeilederTilgang ?
				<div>
					<Normaltekst>{`${lesbartKjonn} (${alder})`}</Normaltekst>
					<BorSammen barn={props.barn} />
				</div>
				: gradering !== Gradering.UGRADERT && !harVeilederTilgang ?
					<div>
						<Normaltekst>{lesbartKjonn}</Normaltekst>
						<Normaltekst>graderingBeskrivelse(gradering)</Normaltekst>
					</div>
					:
					<div>
						<Normaltekst>{`${lesbartKjonn} (${alder})`}</Normaltekst>
						<Normaltekst>{fornavn}</Normaltekst>
						<Normaltekst>{formaterDato(fodselsdato)}</Normaltekst>
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
