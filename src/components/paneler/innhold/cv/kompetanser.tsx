import { Star } from '@navikt/ds-icons';
import { BodyShort } from '@navikt/ds-react';
import { Jobbprofil } from '../../../../rest/datatyper/arenaperson';
import EMDASH from '../../../../utils/emdash';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { ReactComponent as Kompetanserikon } from './ikoner/kompetanser.svg';

function Kompetanser(props: Pick<Jobbprofil, 'kompetanse'>) {
	const { kompetanse, ...rest } = props;

	const kompetanser =
		kompetanse && kompetanse.length > 0
			? kompetanse?.map(kompetansen => (
					<BodyShort className="kompetanse">
						<Star />
						{kompetansen.tittel}
					</BodyShort>
			  ))
			: EMDASH;

	return (
		<Informasjonsbolk
			className="kompetanser"
			header="Kompetanser"
			headerTypo="ingress"
			icon={<Kompetanserikon />}
			{...rest}
		>
			{kompetanser}
		</Informasjonsbolk>
	);
}

export default Kompetanser;
