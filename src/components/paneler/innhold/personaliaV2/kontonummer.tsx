import { Normaltekst } from 'nav-frontend-typografi';
import { isNullOrUndefined } from '../../../../utils';
import EMDASH from '../../../../utils/emdash';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import Kopiknapp from '../../../felles/kopiknapp';

function Kontonummer(props: { kontonummer?: string }) {
	let content: string | React.ReactElement = EMDASH;
	let kontonummer = props.kontonummer;

	if (!isNullOrUndefined(kontonummer)) {
		kontonummer = `${kontonummer?.substring(0, 4)} ${kontonummer?.substring(4, 6)} ${kontonummer?.substring(6)}`;
	}

	if (props.kontonummer) {
		content = (
			<Normaltekst className="innrykk">
				{kontonummer}
				<Kopiknapp kopitekst={props.kontonummer} />
			</Normaltekst>
		);
	}

	return <Informasjonsbolk header="Kontonummer">{content}</Informasjonsbolk>;
}

export default Kontonummer;
