import React from 'react';
import { finnAldersTekst } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';
import { PersonsBarn, PersonaliaV2Info } from '../../../../rest/datatyper/personaliav2';
import EMDASH from "../../../../utils/emdash";
import { isNotEmptyArray } from "../../../../utils";

function BorSammen(props: { barn: PersonsBarn }) {
	const { dodsdato, harSammeBosted } = props.barn;

	if (dodsdato) {
		return null;
	}
	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';

	return <Normaltekst>{borSammen}</Normaltekst>;
}

function EnkeltBarn(props: { barn: PersonsBarn }) {
	const { forkortetNavn, fodselsnummer, kjonn } = props.barn;
	const alder = finnAldersTekst(props.barn);
	const lesbartKjonn = kjonn === 'M' ? 'Gutt' : 'Jente';

	return (
		<div className="overinformasjon underinformasjon">
			<Normaltekst>{`${forkortetNavn} ${alder}, ${lesbartKjonn}`}</Normaltekst>
			<Normaltekst>{fodselsnummer}</Normaltekst>
			<BorSammen barn={props.barn} />
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
