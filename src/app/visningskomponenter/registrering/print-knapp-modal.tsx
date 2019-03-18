import { Hovedknapp } from 'nav-frontend-knapper';
import React from 'react';

export function PrintKnappModal() {
    return (
        <div className="personverninformasjon-modal__header">
            <Hovedknapp htmlType="button" onClick={window.print}>
                <span>Skriv ut</span>
            </Hovedknapp>
        </div>
    );
}
