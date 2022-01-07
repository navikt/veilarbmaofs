import { Copy, CopyFilled } from '@navikt/ds-icons';
import { useState } from 'react';
import './kopiknapp.less';

function Kopiknapp(props: { kopitekst: string }) {
	const [hover, setHover] = useState(false);

	function copyToClipboard() {
		// logger.event('veilarbvisittkortfs.metrikker.kopier.fnr');
		navigator.clipboard.writeText(props.kopitekst);
	}

	return (
		<span
			className="kopiknapp"
			onClick={copyToClipboard}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{hover ? <CopyFilled /> : <Copy />}
		</span>
	);
}

export default Kopiknapp;
