import { Copy, CopyFilled } from '@navikt/ds-icons';
import { Button } from '@navikt/ds-react';
import { useState } from 'react';
import { logger } from '../../utils/logger';
import './kopiknapp.less';

function Kopiknapp(props: { kopitekst: string; type: string }) {
	const [hover, setHover] = useState(false);

	function copyToClipboard() {
		logger.event('maofs.kopiknapp', { type: props.type });
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
		>
			{hover ? <CopyFilled /> : <Copy />}
		</Button>
	);
}

export default Kopiknapp;
