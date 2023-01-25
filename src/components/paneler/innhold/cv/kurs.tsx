import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, formaterVarighet, safeSort, safeMap } from '../../../../utils';
import { ReactComponent as Kursikon } from './ikoner/kurs.svg';
import { BodyShort, Label } from '@navikt/ds-react';

function Kurs(props: Pick<ArenaPerson, 'kurs'>) {
	const { kurs: arenaKurs, ...rest } = props;
	const sortedKurs = arenaKurs.sort((a, b) => safeSort(b.tidspunkt, a.tidspunkt));
	const kurs = safeMap(sortedKurs, (enkeltKurs, index) => (
		<div key={`kurs-${index}`} className="underinformasjon">
			<Label size="small" as="p">
				{enkeltKurs.tittel}
			</Label>

			<BodyShort>{enkeltKurs.arrangor}</BodyShort>
			{enkeltKurs.tidspunkt && <BodyShort>Fullført: {formaterDato(enkeltKurs.tidspunkt)}</BodyShort>}
			{enkeltKurs.varighet && <BodyShort>Kurslengde: {formaterVarighet(enkeltKurs.varighet)}</BodyShort>}
		</div>
	));

	return (
		<Informasjonsbolk header="Kurs" headerTypo="ingress" icon={<Kursikon />} {...rest}>
			{kurs}
		</Informasjonsbolk>
	);
}

export default Kurs;
