import React from 'react';
import { finnAldersTekst } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import {Normaltekst, UndertekstBold} from 'nav-frontend-typografi';
import {Gradering, PersonaliaV2Info, PersonsBarn} from '../../../../rest/datatyper/personaliav2';
import EMDASH from "../../../../utils/emdash";
import { formateLocalDate, formateStringInUpperAndLowerCase, isNotEmptyArray } from "../../../../utils";
import { graderingBeskrivelse, graderingKode } from "../../../../utils/konstanter";
import { EtikettAdvarsel } from "nav-frontend-etiketter";

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

	return (
		<div className="overinformasjon underinformasjon">
			{ erEgenAnsatt && !harVeilederTilgang ?
				<div>
					<UndertekstBold>{`Barn (${alder})`}</UndertekstBold>
					<BorSammen barn={props.barn} />
					<EtikettAdvarsel mini>Egen ansatt</EtikettAdvarsel>
				</div>
				: gradering !== Gradering.UGRADERT && !harVeilederTilgang ?
					<div>
						<UndertekstBold>Barn</UndertekstBold>
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
						<EtikettAdvarsel mini>{graderingKode(gradering)}</EtikettAdvarsel>
					</div>
					:
					<div>
						<UndertekstBold>{`Barn (${alder})`}</UndertekstBold>
						<Normaltekst>{formateStringInUpperAndLowerCase(fornavn)}</Normaltekst>
						<Normaltekst>{formateLocalDate(fodselsdato)}</Normaltekst>
						<BorSammen barn={props.barn} />
						<Normaltekst>{graderingBeskrivelse(gradering)}</Normaltekst>
						<EtikettAdvarsel mini>{graderingKode(gradering)}</EtikettAdvarsel>
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
