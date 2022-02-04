import React, { useState } from 'react';
import Lenke from 'nav-frontend-lenker';
import { Edit, EditFilled } from '@navikt/ds-icons';

export function RedigerJobbprofil(props: { erManuell: boolean; jobbprofilRegistreringsLenke: string }) {
	const [hover, setHover] = useState(false);

	if (!props.erManuell) {
		return null;
	}

	return (
		<Lenke href={props.jobbprofilRegistreringsLenke} className="cv-panel-lenke" target="_blank">
			<span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{hover ? <EditFilled /> : <Edit />}
				Endre jobbønsker
			</span>
		</Lenke>
	);
}
