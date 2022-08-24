import { Up } from '@navikt/ds-icons';
import { Button } from '@navikt/ds-react';
import { useEffect, useState } from 'react';
import { logMetrikk } from '../../utils/logger';
import { scrollTilElement } from '../../utils/sidemeny';
import './til-toppen-knapp.less';

export const TilToppenKnapp = () => {
	const [synlig, setSynlig] = useState(false);

	const skrollOgLogg = () => {
		scrollTilElement('#veilarbpersonflatefs-root');
		logMetrikk('veilarbmaofs.metrikker.tiltoppenknapp');
	};

	const synlighet = () => {
		if (window.scrollY > 300) {
			setSynlig(true);
		} else {
			setSynlig(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', synlighet);
	});

	return (
		<Button variant="secondary" className={`til-toppen-knapp ${synlig ? 'visKnapp' : ''}`} onClick={skrollOgLogg}>
			<Up />
		</Button>
	);
};
