import React from 'react';
import { finnAldersTekst } from '../../../../utils/date-utils';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { PersonaliaBarn, PersonaliaInfo } from '../../../../rest/datatyper/personalia';
import { BodyShort } from '@navikt/ds-react';

function BorSammen(props: { barn: PersonaliaBarn }) {
	const { dodsdato, harSammeBosted } = props.barn;

	if (dodsdato) {
		return null;
	}
	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';

	return <BodyShort>{borSammen}</BodyShort>;
}

function EnkeltBarn(props: { barn: PersonaliaBarn }) {
	const { sammensattNavn, fodselsnummer, kjonn } = props.barn;
	const alder = finnAldersTekst(props.barn);
	const lesbartKjonn = kjonn === 'M' ? 'Gutt' : 'Jente';

	return (
		<div className="underinformasjon">
			<BodyShort>{`${sammensattNavn} ${alder}, ${lesbartKjonn}`}</BodyShort>
			<BodyShort>{fodselsnummer}</BodyShort>
			<BorSammen barn={props.barn} />
		</div>
	);
}

function Barn(props: Pick<PersonaliaInfo, 'barn'>) {
	if (isNullOrUndefined(props.barn) || props.barn.length === 0) {
		return null;
	}

	const { barn, ...rest } = props;

	const barnListe = barn.map(ettBarn => <EnkeltBarn barn={ettBarn} key={ettBarn.fodselsnummer} />);
	return (
		<Informasjonsbolk header="Barn under 21 år" {...rest}>
			{barnListe}
		</Informasjonsbolk>
	);
}

export default Barn;
