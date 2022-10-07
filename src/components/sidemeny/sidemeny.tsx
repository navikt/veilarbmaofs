import React from 'react';
import { useAppStore } from '../../stores/app-store';
import { scrollTilElement } from '../../utils/sidemeny';
import { Heading, Panel } from '@navikt/ds-react';
import './sidemeny.less';

export const Sidemeny: React.FC = () => {
	const { sidemenyElementer, setIsOpenSidemenyElement } = useAppStore();

	return (
		<Panel className="sidemeny" aria-labelledby="detaljer-om-bruker">
			<Heading size="medium" level="2" id="detaljer-om-bruker">
				Detaljer om bruker
			</Heading>
			<ul>
				{sidemenyElementer.map(sidemenyElement => (
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
				))}
			</ul>
		</Panel>
	);
};
