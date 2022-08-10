import React, { useState } from 'react';
import ErrorBoundary from '../felles/error-boundry';
import { logger } from '../../utils/logger';
import { useEffect } from 'react';
import { useAppStore } from '../../stores/app-store';
import { Accordion } from '@navikt/ds-react';

interface PanelProps {
	name: string;
	tittel: React.ReactNode;
	id: string;
	defaultOpen: boolean;
	children?: any;
}

const AccordionItemErrorBoundary: React.FC<PanelProps> = ({ defaultOpen, name, id, children, tittel }) => {
	const { valgteSidemenyElmenter, isSidemenyElementOpen, fjernSidemenyElement } = useAppStore();
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const onClick = () => {
		const eventType = !isOpen ? 'open' : 'close';
		logger.event('maofs.panel-click', {}, { panel: name, type: eventType });
		if (isOpen) {
			fjernSidemenyElement(id);
		}
		setIsOpen(prev => !prev);
	};

	const errorMessage = `En feil oppstod under visningen, prøv på nytt senere.
     Hvis problemet vedvarer så ta kontakt med brukerstøtte.`;

	return (
		<Accordion.Item defaultOpen={defaultOpen} open={isSidemenyElementOpen(id) || isOpen}>
			<Accordion.Header id={id} onClick={onClick}>
				{tittel}
			</Accordion.Header>
			<Accordion.Content>
				<ErrorBoundary message={errorMessage}>{children}</ErrorBoundary>
			</Accordion.Content>
		</Accordion.Item>
	);
};

export default AccordionItemErrorBoundary;
