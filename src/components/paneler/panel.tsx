import React, { useState } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import ErrorBoundary from '../felles/error-boundry';
import { logMetrikk } from '../../utils/logger';
import { useEffect } from 'react';
import { useAppStore } from '../../stores/app-store';

interface PanelProps {
	name: string;
	tittel: string;
	id: string;
	defaultOpen: boolean;
	children?: any;
}

const Panel: React.FC<PanelProps> = ({ defaultOpen, name, id, children, tittel }) => {
	const { valgteSidemenyElmenter, isSidemenyElementOpen, fjernSidemenyElement } = useAppStore();
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const panelRef = React.useRef<Ekspanderbartpanel>(null);

	const onClick = () => {
		const eventType = !isOpen ? 'open' : 'close';
		logMetrikk('maofs.lamell-click.v2', {}, { lamell: name, type: eventType });
		if (isOpen) {
			fjernSidemenyElement(id);
		}
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		if (isSidemenyElementOpen(id) && !isOpen) {
			setIsOpen(true);
			panelRef.current!.setState(prevstate => ({ ...prevstate, apen: true }));
		}
	}, [valgteSidemenyElmenter, id, isOpen, isSidemenyElementOpen]);

	const errorMessage = `En feil oppstod under visningen, prøv på nytt senere.
     Hvis problemet vedvarer så ta kontakt med brukerstøtte.`;

	return (
		<Ekspanderbartpanel ref={panelRef} tittel={tittel} id={id} apen={isOpen} onClick={onClick} border={false}>
			<ErrorBoundary message={errorMessage}>{children}</ErrorBoundary>
		</Ekspanderbartpanel>
	);
};

export default Panel;
