import React, { useEffect, useState } from 'react';
import Panel from './panel';
import { useFetchTagIntegrasjonToggle } from '../../rest/api';
import { hasData } from '../../rest/utils';
import { isPending } from '@nutgaard/use-async';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';

export const TilretteleggingsBehovPanel = (props: { defaultOpen: boolean }) => {
	const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>();
	const visTagPanel = useFetchTagIntegrasjonToggle();

	useEffect(() => {
		if (props.defaultOpen && scrollRef) {
			scrollRef.scrollIntoView({ block: 'center', behavior: 'smooth' });
		}
	}, [props.defaultOpen, scrollRef]);

	if (isPending(visTagPanel) || !hasData(visTagPanel) || !visTagPanel.data.harTilgang) {
		return null;
	}

	return (
		<div ref={setScrollRef}>
			<Panel name="tilretteleggingsbehov" tittel="Tilretteleggingsbehov" defaultOpen={props.defaultOpen}>
				<TilretteleggingsbehovSpa viewType={TilretteleggingsbehovViewType.VIS_TILRETTELEGGINGSBEHOV} />
			</Panel>
		</div>
	);
};
