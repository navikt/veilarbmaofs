import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../../../utils/emdash';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

function Malform(props: { malform?: string }) {
	let content: string | React.ReactElement = EMDASH;
	let malform = props.malform;

	if (props.malform) {
		content = <Normaltekst className="innrykk">{malform}</Normaltekst>;
	}

	return <Informasjonsbolk header="Målform">{content}</Informasjonsbolk>;
}

export default Malform;
