import React, { useState } from 'react';
import { Edit, EditFilled } from '@navikt/ds-icons';
import { Link } from '@navikt/ds-react';

export function RedigerJobbprofil(props: { erManuell: boolean; jobbprofilRegistreringsLenke: string }) {
	const [hover, setHover] = useState(false);

	if (!props.erManuell) {
		return null;
	}

	return (
		<Link href={props.jobbprofilRegistreringsLenke} className="cv-panel-lenke" target="_blank">
			<span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				{hover ? <EditFilled /> : <Edit />}
				Endre jobbprofil
			</span>
		</Link>
	);
}
