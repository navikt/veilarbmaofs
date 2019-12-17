import React from 'react';
import Lenke from 'nav-frontend-lenker';
import { logEvent } from '../../../../utils/frontend-logger';

export function LastNedCV(props: { erManuell: boolean; lastNedCvLenke: string }) {
	const handleOnLastNedLenkeClicked = () => {
		logEvent('veilarbmaofs.metrikker.last-ned-cv', { erManuell: props.erManuell });
	};

	return (
		<Lenke
			onClick={handleOnLastNedLenkeClicked}
			href={props.lastNedCvLenke}
			className="last-ned-cv-lenke"
			target="_blank"
		>
			<span>Last Ned CV</span>
		</Lenke>
	);
}
