import React from 'react';
import { isPending } from '@nutgaard/use-async';
import { Laster } from '../felles/fetch';
import { Paneler } from '../paneler/paneler';
import { Sidemeny } from '../sidemeny/sidemeny';
import { useFetchOppfolgingsstatus } from '../../rest/api';
import TilbakemeldingFab from '../tilbakemelding/fab/tilbakemelding-fab';
import { useAppStore } from '../../stores/app-store';

export const DetaljerView: React.FC = () => {
	const { fnr } = useAppStore();
	const oppfolgingstatus = useFetchOppfolgingsstatus(fnr);

	return (
		<article className="veilarbmaofs__container">
			{isPending(oppfolgingstatus) ? (
				<Laster midtstilt={true} />
			) : (
				<>
					<Sidemeny />
					<Paneler />
				</>
			)}

			<TilbakemeldingFab />
		</article>
	);
};
