import React, { useState } from 'react';
import Lenke from 'nav-frontend-lenker';
import { Edit, EditFilled } from '@navikt/ds-icons';

export function RedigerJobbprofil(props: { erManuell: boolean; jobbprofilRegistreringsLenke: string }) {
	const [hover, setHover] = useState(false);

	if (!props.erManuell) {
		return null;
	}

	function isHover(hoverState: boolean) {
		return () => {
			setHover(hoverState);
		};
	}

	return (
		<Lenke href={props.jobbprofilRegistreringsLenke} className="cv-panel-lenke" target="_blank">
			<span onMouseEnter={isHover(true)} onMouseLeave={isHover(false)}>
				{hover ? <EditFilled /> : <Edit />}
				Endre jobbprofil
			</span>
		</Lenke>
	);
}
