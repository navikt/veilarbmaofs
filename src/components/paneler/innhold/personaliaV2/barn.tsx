import React from 'react';
import { finnAlder } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Normaltekst, UndertekstBold } from 'nav-frontend-typografi';
import { Gradering, PersonaliaV2Info, PersonsBarn } from '../../../../rest/datatyper/personaliav2';
import EMDASH from '../../../../utils/emdash';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNotEmptyArray } from '../../../../utils';
import { graderingBeskrivelseBarn, hentBorMedBarnBeskrivelse } from '../../../../utils/konstanter';

function BorSammen(props: { barn: PersonsBarn }) {
	const { dodsdato, relasjonsBosted } = props.barn;
	if (dodsdato) {
		return null;
	}

	const borSammen = hentBorMedBarnBeskrivelse(relasjonsBosted);

	return <Normaltekst>{borSammen}</Normaltekst>;
}

function EnkeltBarn(props: { barn: PersonsBarn }) {
	const { fornavn, fodselsdato, gradering, erEgenAnsatt, harVeilederTilgang } = props.barn;
	const alder = finnAlder(props.barn);
	const graderingTekst = gradering && gradering !== Gradering.UGRADERT ? graderingBeskrivelseBarn(gradering) : null;

	return (
		<div className="overinformasjon underinformasjon innrykk">
			{erEgenAnsatt && !harVeilederTilgang ? (
				<div>
					<UndertekstBold>{`Barn (${alder})`}</UndertekstBold>
					<BorSammen barn={props.barn} />
				</div>
			) : graderingTekst && !harVeilederTilgang ? (
				<div>
					<UndertekstBold>Barn</UndertekstBold>
					{graderingTekst && <Normaltekst>{graderingTekst}</Normaltekst>}
				</div>
			) : (
				<div>
					<UndertekstBold>{`Barn (${alder})`}</UndertekstBold>
					<Normaltekst>{formateStringInUpperAndLowerCase(fornavn)}</Normaltekst>
					<Normaltekst>{formateLocalDate(fodselsdato)}</Normaltekst>
					<BorSammen barn={props.barn} />
					{graderingTekst && <Normaltekst>{graderingTekst}</Normaltekst>}
				</div>
			)}
		</div>
	);
}

function Barn(props: Pick<PersonaliaV2Info, 'barn'>) {
	const { barn, ...rest } = props;

	const barnListe = isNotEmptyArray(barn)
		? barn.map((ettBarn, index) => <EnkeltBarn barn={ettBarn} key={index} />)
		: EMDASH;

	return (
		<Informasjonsbolk header="Barn under 21 år" {...rest}>
			{barnListe}
		</Informasjonsbolk>
	);
}

export default Barn;
