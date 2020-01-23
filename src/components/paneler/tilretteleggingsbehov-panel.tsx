import React from 'react';
import Panel from './panel';
import { useFetchTagIntegrasjonToggle } from '../../rest/api';
import { hasData } from '../../rest/utils';
import { isPending } from '@nutgaard/use-async';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';

export const TagPanel = () => {
	const visTagPanel = useFetchTagIntegrasjonToggle();

	if (isPending(visTagPanel) || !hasData(visTagPanel) || !visTagPanel.data.harTilgang) {
		return null;
	}

	return (
		<Panel name="tilretteleggingsbehov" tittel="Tilretteleggingsbehov">
			<TilretteleggingsbehovSpa viewType={TilretteleggingsbehovViewType.PANEL} />
		</Panel>
	);
};
