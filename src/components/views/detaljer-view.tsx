import React from 'react';
import { Paneler } from '../paneler/paneler';
import TilbakemeldingFab from '../tilbakemelding/fab/tilbakemelding-fab';

export const DetaljerView = () => {
    return (
        <div className="veilarbmaofs__container">
            <Paneler/>
            <TilbakemeldingFab/>
        </div>
    );
};
