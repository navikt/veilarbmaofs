import React from 'react';
import { finnAlder } from '../../../../utils/date-utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

import { Gradering, PersonaliaV2Info, PersonsBarn } from '../../../../rest/datatyper/personaliav2';
import EMDASH from '../../../../utils/emdash';
import { formateLocalDate, formateStringInUpperAndLowerCase, isNotEmptyArray } from '../../../../utils';
import { graderingBeskrivelseBarn, hentBorMedBarnBeskrivelse } from '../../../../utils/konstanter';
import { BodyShort, Detail } from '@navikt/ds-react';

function BorSammen(props: { barn: PersonsBarn }) {
	const { dodsdato, relasjonsBosted } = props.barn;
	if (dodsdato) {
		return null;
	}

	const borSammen = hentBorMedBarnBeskrivelse(relasjonsBosted);

	return <BodyShort>{borSammen}</BodyShort>;
}

function EnkeltBarn(props: { barn: PersonsBarn }) {
	const { fornavn, fodselsdato, gradering, erEgenAnsatt, harVeilederTilgang } = props.barn;
	const alder = finnAlder(props.barn);
	const graderingTekst = gradering && gradering !== Gradering.UGRADERT ? graderingBeskrivelseBarn(gradering) : null;

	return (
		<div className="underinformasjon innrykk">
			{erEgenAnsatt && !harVeilederTilgang ? (
				<div>
					<Detail>
						<strong>{`Barn (${alder})`}</strong>
					</Detail>
					<BorSammen barn={props.barn} />
				</div>
			) : graderingTekst && !harVeilederTilgang ? (
				<div>
					<Detail>
						<strong>Barn</strong>
					</Detail>
					{graderingTekst && <BodyShort>{graderingTekst}</BodyShort>}
				</div>
			) : (
				<div>
					<Detail>
						<strong>{`Barn (${alder})`}</strong>
					</Detail>
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
		? barn.map((ettBarn, index) => <EnkeltBarn barn={ettBarn} key={index} />)
		: EMDASH;

	return (
		<Informasjonsbolk header="Barn under 21 år" {...rest}>
			{barnListe}
		</Informasjonsbolk>
	);
}

export default Barn;
