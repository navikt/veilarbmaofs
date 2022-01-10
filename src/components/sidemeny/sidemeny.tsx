import React from 'react';
import { hasData } from '../../rest/utils';
import { PERSONALIA_DATA_FRA_TPS } from '../../rest/datatyper/feature';
import { useFetchFeatureToggle } from '../../rest/api';
import { useAppStore } from '../../stores/app-store';

import './sidemeny.less';
import { scrollTilElement, sidemenyElementId } from '../../utils/sidemeny';

export const Sidemeny: React.FC = () => {
	const { sidemenyElementer, setIsOpenSidemenyElement } = useAppStore();
	const features = useFetchFeatureToggle();

	const visPersonaliaFraTPS = hasData(features) && features.data[PERSONALIA_DATA_FRA_TPS];
	const visPersonaliaFraPDL = !visPersonaliaFraTPS;

	const skalViseMenyElement = (id: string): boolean => {
		if (id === sidemenyElementId.personalia) return visPersonaliaFraTPS;
		if (id === sidemenyElementId.personaliaFraPdl) return visPersonaliaFraPDL;
		return true;
	};

	return (
		<section className="sidemeny">
			<h2 onClick={() => scrollTilElement('#veilarbpersonflatefs-root')}>Detaljer om bruker</h2>
			<nav>
				<ul>
					{sidemenyElementer.map(
						sidemenyElement =>
							skalViseMenyElement(sidemenyElement.id) && (
								<li key={`sidemenyelement-${sidemenyElement.id}`}>
									<a
										tabIndex={-1}
										onClick={e => {
											e.preventDefault();
											setIsOpenSidemenyElement(sidemenyElement);
											scrollTilElement(`#${sidemenyElement.id}`);
										}}
										href={`#${sidemenyElement.id}`}
									>
										{sidemenyElement.name}
									</a>
								</li>
							)
					)}
				</ul>
			</nav>
		</section>
	);
};