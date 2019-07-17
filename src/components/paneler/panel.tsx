import React, { useState } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { logEvent } from '../../utils/frontend-logger';
import ErrorBoundary from '../felles/error-boundry';

interface PanelProps {
    name: string;
    tittel: string;
    defaultOpen?: boolean;
    children?: any;
}

const Panel = (props: PanelProps) => {
    const {defaultOpen, name, children, tittel} = props;
    const [isOpen, setIsOpen] = useState(defaultOpen);

    function onClick() {
        const eventType = !isOpen ? 'open' : 'close';
        logEvent('maofs.lamell-click.v2', {}, {lamell: name, type: eventType});
        setIsOpen(!isOpen);
    }

    const errorMessage = `En feil oppstod under visningen, prøv på nytt senere.
     Hvis problemet vedvarer så ta kontakt med brukerstøtte.`;

    return (
        <Ekspanderbartpanel tittel={tittel} apen={isOpen} onClick={onClick} tittelProps="undertittel">
            <ErrorBoundary message={errorMessage}>
                {children}
            </ErrorBoundary>
        </Ekspanderbartpanel>
    );
};

export default Panel;
