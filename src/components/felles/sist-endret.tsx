import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { StringOrNothing } from '../../utils/felles-typer';
import { formaterDato } from '../../utils/utils';

interface SistEndretProps {
    sistEndret: StringOrNothing;
    onlyYearAndMonth: boolean;
}

function SistEndret(props: SistEndretProps) {
    const formattertTidspunkt = formaterDato(props.sistEndret, props.onlyYearAndMonth);

    return (
        <Normaltekst className="italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default SistEndret;
