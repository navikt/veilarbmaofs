import React from 'react';
import { ArenaPerson, Fagdokumentasjon, FagdokumentType } from '../../../../rest/datatyper/arenaperson';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../../../utils/emdash';
import { visEmdashHvisNull } from '../../../../utils';

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
					<Element>{fagdokumentTypeTilTekst(fagdokument.type)}</Element>
					<Normaltekst>{visEmdashHvisNull(fagdokument.tittel)}</Normaltekst>
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
		<Informasjonsbolk header="Fagdokumentasjoner" headerTypo="ingress">
			{dokumentasjoner}
		</Informasjonsbolk>
	);
}

export default Fagdokumentasjoner;
