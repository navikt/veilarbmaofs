import React from 'react';
import { hasData } from '../../rest/utils';
import { PERSONALIA_DATA_FRA_PDL, PERSONALIA_DATA_FRA_TPS } from '../../rest/datatyper/feature';
import { useFetchFeatureToggle } from '../../rest/api';
import { useAppStore } from '../../stores/app-store';

import './sidemeny.less';
import { scrollTilLamell, sidemenyElementId } from '../../utils/sidemeny';

export const Sidemeny: React.FC = () => {
	const { sidemenyElementer, setIsOpenSidemenyElement } = useAppStore();
	const features = useFetchFeatureToggle();

	const visPersonaliaFraTPS = hasData(features) && features.data[PERSONALIA_DATA_FRA_TPS];
	const visPersonaliaFraPDL = hasData(features) && features.data[PERSONALIA_DATA_FRA_PDL];

	const skalViseMenyElement = (id: string): boolean => {
		if (id === sidemenyElementId.personalia) return visPersonaliaFraTPS;
		if (id === sidemenyElementId.personaliaFraPdl) return visPersonaliaFraPDL;
		return true;
	};

	return (
		<section className="sidemeny-container">
			<div className="sidemeny">
				<h2>Detaljer om bruker</h2>
				<nav>
					<ul>
						{sidemenyElementer.map(
							sidemenyElement =>
								skalViseMenyElement(sidemenyElement.id) && (
									<li key={`sidemenyelement-${sidemenyElement.id}`}>
										<button
											onClick={() => {
												setIsOpenSidemenyElement(sidemenyElement);
												scrollTilLamell(sidemenyElement.id);
											}}
										>
											{sidemenyElement.name}
										</button>
									</li>
								)
						)}
					</ul>
				</nav>
			</div>
		</section>
	);
};
