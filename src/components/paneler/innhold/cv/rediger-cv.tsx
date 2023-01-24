import { useState } from 'react';
import { Edit, EditFilled } from '@navikt/ds-icons';
import { Link } from '@navikt/ds-react';

export function RedigerCV(props: { erManuell: boolean; cvRegistreringsLenke: string }) {
	const [hover, setHover] = useState(false);

	if (!props.erManuell) {
		return null;
	}

	return (
		<Link
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			href={props.cvRegistreringsLenke}
			className="cv-panel-lenke"
			target="_blank"
		>
			{hover ? <EditFilled /> : <Edit />}
			Endre CV/jobbønsker
		</Link>
	);
}
