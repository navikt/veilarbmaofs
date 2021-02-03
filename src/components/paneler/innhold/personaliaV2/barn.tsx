import React from 'react';
import {finnAldersTekst} from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Normaltekst } from 'nav-frontend-typografi';
import { PersonaliaBarn, PersonaliaV2Info } from '../../../../rest/datatyper/personaliav2';

function BorSammen(props: { barn: PersonaliaBarn }) {
	const { dodsdato, harSammeBosted } = props.barn;

	if (dodsdato) {
		return null;
	}
	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';

	return <Normaltekst>{borSammen}</Normaltekst>;
}

function EnkeltBarn(props: { barn: PersonaliaBarn }) {
	const { forkortetNavn, fodselsnummer, kjonn } = props.barn;
	const alder = finnAldersTekst(props.barn);
	const lesbartKjonn = kjonn === 'M' ? 'Gutt' : 'Jente';

	return (
		<div className="underinformasjon">
			<Normaltekst>{`${forkortetNavn} ${alder}, ${lesbartKjonn}`}</Normaltekst>
			<Normaltekst>{fodselsnummer}</Normaltekst>
			<BorSammen barn={props.barn} />
		</div>
	);
}

function Barn(props: Pick<PersonaliaV2Info, 'barn'>) {
	const { barn, ...rest } = props;

	if (barn.length === 0) {
		return null;
	}

	const barnListe = barn.map(ettBarn => <EnkeltBarn barn={ettBarn} key={ettBarn.fodselsnummer} />);

	return (
		<Informasjonsbolk header="Barn under 21 år" {...rest}>
			{barnListe}
		</Informasjonsbolk>
	);
}

export default Barn;
