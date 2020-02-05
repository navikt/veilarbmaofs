import React from 'react';
import Panel from './panel';
import { useFetchTagIntegrasjonToggle } from '../../rest/api';
import { hasData } from '../../rest/utils';
import { isPending } from '@nutgaard/use-async';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';

export const TilretteleggingsBehovPanel = (props: { defaultOpen: boolean }) => {
	const visTagPanel = useFetchTagIntegrasjonToggle();

	if (isPending(visTagPanel) || !hasData(visTagPanel) || !visTagPanel.data.harTilgang) {
		return null;
	}

	return (
		<Panel name="tilretteleggingsbehov" tittel="Tilretteleggingsbehov" defaultOpen={props.defaultOpen}>
			<TilretteleggingsbehovSpa viewType={TilretteleggingsbehovViewType.VIS_TILRETTELEGGINGSBEHOV} />
		</Panel>
	);
};
