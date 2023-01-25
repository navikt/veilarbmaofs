import React from 'react';
import { BodyShort } from '@navikt/ds-react';
import { CopyToClipboard } from '@navikt/ds-react-internal';
import { isNullOrUndefined } from '../../../../utils';
import EMDASH from '../../../../utils/emdash';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

function Kontonummer(props: { kontonummer?: string }) {
	let content: string | React.ReactElement = EMDASH;
	let kontonummer = props.kontonummer;

	if (!isNullOrUndefined(kontonummer)) {
		kontonummer = `${kontonummer?.substring(0, 4)} ${kontonummer?.substring(4, 6)} ${kontonummer?.substring(6)}`;
	}

	if (props.kontonummer) {
		content = (
			<BodyShort className="innrykk flex-align-center">
				{kontonummer}
				<CopyToClipboard
					copyText={props.kontonummer}
					popoverText="Kopiert"
					popoverPlacement="top"
					size="xsmall"
					title="Kopier kontonummer"
				/>
			</BodyShort>
		);
	}

	return <Informasjonsbolk header="Kontonummer">{content}</Informasjonsbolk>;
}

export default Kontonummer;
