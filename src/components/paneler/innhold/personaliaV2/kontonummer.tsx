import EMDASH from '../../../../utils/emdash';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import Kopiknapp from '../../../felles/kopiknapp';
import { BodyShort } from '@navikt/ds-react';
import { isNullOrUndefined } from '../../../../utils';

function Kontonummer(props: { kontonummer?: string }) {
	let content: string | React.ReactElement = EMDASH;
	let kontonummer = props.kontonummer;

	if (!isNullOrUndefined(kontonummer)) {
		kontonummer = `${kontonummer?.substring(0, 4)} ${kontonummer?.substring(4, 6)} ${kontonummer?.substring(6)}`;
	}

	if (props.kontonummer) {
		content = (
			<BodyShort className="innrykk">
				{kontonummer}
				<Kopiknapp kopitekst={props.kontonummer} type="kontonummer" />
			</BodyShort>
		);
	}

	return <Informasjonsbolk header="Kontonummer">{content}</Informasjonsbolk>;
}

export default Kontonummer;
