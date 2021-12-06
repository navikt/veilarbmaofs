import React, { useState } from 'react';
import Lenke from 'nav-frontend-lenker';
import { Edit, EditFilled } from '@navikt/ds-icons';

export function RedigerCV(props: { erManuell: boolean; cvRegistreringsLenke: string }) {
	const [hover, setHover] = useState(false);

	if (!props.erManuell) {
		return null;
	}

	return (
		<Lenke href={props.cvRegistreringsLenke} className="cv-panel-lenke" target="_blank">
			<span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{hover ? <EditFilled /> : <Edit />}
				Endre CV
			</span>
		</Lenke>
	);
}
