import { BodyShort } from '@navikt/ds-react';
import { Jobbprofil } from '../../../../rest/datatyper/arenaperson';
import EMDASH from '../../../../utils/emdash';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { ReactComponent as Kompetanserikon } from './ikoner/kompetanser.svg';

function Kompetanser(props: Pick<Jobbprofil, 'kompetanse'>) {
	const { kompetanse, ...rest } = props;

	const kompetanser =
		kompetanse && kompetanse.length > 0 ? kompetanse?.map(kompetansen => <li>{kompetansen.tittel}</li>) : EMDASH;

	return (
		<Informasjonsbolk
			className="kompetanser"
			header="Kompetanser"
			headerTypo="ingress"
			icon={<Kompetanserikon />}
			{...rest}
		>
			<ul>{kompetanser}</ul>
		</Informasjonsbolk>
	);
}

export default Kompetanser;
