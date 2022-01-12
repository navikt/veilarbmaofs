import React from 'react';
import { finnAlder } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { Gradering, PersonaliaV2Info, PersonsBarn } from '../../../../rest/datatyper/personaliav2';
import EMDASH from '../../../../utils/emdash';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNotEmptyArray } from '../../../../utils';
import { graderingBeskrivelse } from '../../../../utils/konstanter';
import { BodyShort, Detail } from '@navikt/ds-react';

function BorSammen(props: { barn: PersonsBarn }) {
	const { dodsdato, harSammeBosted } = props.barn;

	if (dodsdato) {
		return null;
	}
	const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';

	return <BodyShort>{borSammen}</BodyShort>;
}

function EnkeltBarn(props: { barn: PersonsBarn }) {
	const { fornavn, fodselsdato, gradering, erEgenAnsatt, harVeilederTilgang } = props.barn;
	const alder = finnAlder(props.barn);
	const graderingTekst = graderingBeskrivelse(gradering);

	return (
		<div className="overinformasjon underinformasjon">
			{erEgenAnsatt && !harVeilederTilgang ? (
				<div>
					<Detail>{`Barn (${alder})`}</Detail>
					<BorSammen barn={props.barn} />
				</div>
			) : gradering !== Gradering.UGRADERT && !harVeilederTilgang ? (
				<div>
					<Detail>Barn</Detail>
					{graderingTekst && <BodyShort>{graderingTekst}</BodyShort>}
				</div>
			) : (
				<div>
					<Detail>{`Barn (${alder})`}</Detail>
					<BodyShort>{formateStringInUpperAndLowerCase(fornavn)}</BodyShort>
					<BodyShort>{formateLocalDate(fodselsdato)}</BodyShort>
					<BorSammen barn={props.barn} />
					{graderingTekst && <BodyShort>{graderingTekst}</BodyShort>}
				</div>
			)}
		</div>
	);
}

function Barn(props: Pick<PersonaliaV2Info, 'barn'>) {
	const { barn, ...rest } = props;

	const barnListe = isNotEmptyArray(barn)
		? barn.map(ettBarn => <EnkeltBarn barn={ettBarn} key={ettBarn.fodselsnummer} />)
		: EMDASH;

	return (
		<Informasjonsbolk header="Barn under 21 år" {...rest}>
			{barnListe}
		</Informasjonsbolk>
	);
}

export default Barn;
