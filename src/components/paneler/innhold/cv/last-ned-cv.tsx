import React, { useState } from 'react';
import { logger } from '../../../../utils/logger';
import { Download, DownloadFilled } from '@navikt/ds-icons';
import { Link } from '@navikt/ds-react';

export function LastNedCV(props: { erManuell: boolean; lastNedCvLenke: string }) {
	const [hover, setHover] = useState(false);

	const handleOnLastNedLenkeClicked = () => {
		logger.event('veilarbmaofs.metrikker.last-ned-cv', { erManuell: props.erManuell });
	};

	return (
		<Link
			onClick={handleOnLastNedLenkeClicked}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			href={props.lastNedCvLenke}
			className="cv-panel-lenke"
			target="_blank"
		>
			{hover ? <DownloadFilled /> : <Download />}
			Last ned CV
		</Link>
	);
}
