import { ArenaPerson, Fagdokumentasjon, FagdokumentType } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import EMDASH from '../../../../utils/emdash';
import { ReactComponent as Fagbrevikon } from './ikoner/fagbrev.svg';
import { BodyShort, Label } from '@navikt/ds-react';

type Props = Pick<ArenaPerson, 'fagdokumentasjoner'>;

const fagdokumentTypeTilTekst = (fagdokumentType: FagdokumentType): string => {
	switch (fagdokumentType) {
		case FagdokumentType.AUTORISASJON:
			return 'Autorisasjon';
		case FagdokumentType.MESTERBREV:
			return 'Mesterbrev';
		case FagdokumentType.SVENNEBREV_FAGBREV:
			return 'Fagbrev/Svennebrev';
		default:
			return '';
	}
};

const mapFagdokumentasjonerTilViews = (fagdokumentasjoner: Fagdokumentasjon[]) => {
	return (
		fagdokumentasjoner &&
		fagdokumentasjoner.map((fagdokument, idx) => {
			return (
				<div key={`fagdokument-${idx}`} className="underinformasjon">
					<Label size="small" as="p">
						{fagdokument.tittel}
					</Label>
					<BodyShort>{fagdokumentTypeTilTekst(fagdokument.type)}</BodyShort>
				</div>
			);
		})
	);
};

function Fagdokumentasjoner(props: Props) {
	const { fagdokumentasjoner } = props;
	const dokumentasjoner =
		fagdokumentasjoner && fagdokumentasjoner.length > 0
			? mapFagdokumentasjonerTilViews(fagdokumentasjoner)
			: EMDASH;

	return (
		<Informasjonsbolk header="Fagbrev" headerTypo="ingress" icon={<Fagbrevikon />}>
			{dokumentasjoner}
		</Informasjonsbolk>
	);
}

export default Fagdokumentasjoner;
