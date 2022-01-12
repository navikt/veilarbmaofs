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
			href={props.lastNedCvLenke}
			className="cv-panel-lenke"
			target="_blank"
		>
			<span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{hover ? <DownloadFilled /> : <Download />}
				Last ned CV
			</span>
		</Link>
	);
}
