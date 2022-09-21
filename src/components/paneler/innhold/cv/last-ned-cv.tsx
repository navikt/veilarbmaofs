import React, { useState } from 'react';
import Lenke from 'nav-frontend-lenker';
import { logMetrikk } from '../../../../utils/logger';
import { Download, DownloadFilled } from '@navikt/ds-icons';

export function LastNedCV(props: { erManuell: boolean; lastNedCvLenke: string }) {
	const [hover, setHover] = useState(false);

	const handleOnLastNedLenkeClicked = () => {
		logMetrikk('veilarbmaofs.metrikker.last-ned-cv', { erManuell: props.erManuell });
	};

	return (
		<Lenke
			onClick={handleOnLastNedLenkeClicked}
			href={props.lastNedCvLenke}
			className="cv-panel-lenke"
			target="_blank"
		>
			<span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{hover ? <DownloadFilled /> : <Download />}
				Last ned CV
			</span>
		</Lenke>
	);
}
