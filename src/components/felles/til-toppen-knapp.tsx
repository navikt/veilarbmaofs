import { UpFilled } from '@navikt/ds-icons';
import { Button } from '@navikt/ds-react';
import { logMetrikk } from '../../utils/logger';
import { scrollTilElement } from '../../utils/sidemeny';
import './til-toppen-knapp.less';

export const TilToppenKnapp = () => {
	// Hvis høyden på nettsiden er høyere enn en skjermhøyde og man ikke er på toppen, vis knapp

	const skrollOgLogg = () => {
		scrollTilElement('#veilarbpersonflatefs-root');
		logMetrikk('tiltoppenknapp');
	};

	return (
		<Button variant="secondary" className="til-toppen-knapp" onClick={skrollOgLogg}>
			<UpFilled />
		</Button>
	);
};
