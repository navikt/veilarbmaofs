import React, { useState } from 'react';
import { useFetchTagIntegrasjonToggle } from '../../../rest/api';
import { hasData } from '../../../rest/utils';
import { isPending } from '@nutgaard/use-async';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../../tilretteleggingsbehov-spa';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import { logEvent } from '../../../utils/frontend-logger';
import { Undertittel } from 'nav-frontend-typografi';
import newBadge from './new-badge.svg';
import './tilretteleggingsbehov-panel.less';

export const TilretteleggingsBehovPanel = (props: { defaultOpen: boolean }) => {
	const visTagPanel = useFetchTagIntegrasjonToggle();
	const [isOpen, setIsOpen] = useState(props.defaultOpen);

	function onClick() {
		const eventType = !isOpen ? 'open' : 'close';
		logEvent('maofs.lamell-click.v2', {}, { lamell: 'tilretteleggingsbehov', type: eventType });
		setIsOpen(!isOpen);
	}

	if (isPending(visTagPanel) || !hasData(visTagPanel) || !visTagPanel.data.harTilgang) {
		return null;
	}

	const heading = (
		<div className="tag-panel__header">
			<Undertittel className="tag-panel__tittel">Behov for tilrettelegging</Undertittel>
			<img src={newBadge} alt="Nyhet" className="tag-panel__new-badge"/>
		</div>
	);

	return (
		<div className="tag-panel">
			<EkspanderbartpanelBase heading={heading} apen={isOpen} onClick={onClick}>
				<TilretteleggingsbehovSpa viewType={TilretteleggingsbehovViewType.VIS_TILRETTELEGGINGSBEHOV} />
			</EkspanderbartpanelBase>
		</div>
	);
};
