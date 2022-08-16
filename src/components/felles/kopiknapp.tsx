import { Copy, CopyFilled } from '@navikt/ds-icons';
import { Button } from '@navikt/ds-react';
import { useState } from 'react';
import { logMetrikk } from '../../utils/logger';
import './kopiknapp.less';

function Kopiknapp(props: { kopitekst: string; type: string }) {
	const [hover, setHover] = useState(false);

	function copyToClipboard() {
		logMetrikk('maofs.kopiknapp', { type: props.type });
		navigator.clipboard.writeText(props.kopitekst);
	}

	return (
		<Button
			className="kopiknapp"
			onClick={copyToClipboard}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			variant="tertiary"
			size="small"
			aria-label={`Kopier ${props.type}`}
			title={`Kopier ${props.type}`}
		>
			{hover ? <CopyFilled /> : <Copy />}
		</Button>
	);
}

export default Kopiknapp;
