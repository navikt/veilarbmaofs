import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import {StringOrNothing} from "../felles-typer";
import {formaterDato} from "../utils";

interface SistEndretProps {
    sistEndret: StringOrNothing;
}

function SistEndret(props: SistEndretProps) {
    const formattertTidspunkt = formaterDato(props.sistEndret!);

    return (
        <Normaltekst className="italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default SistEndret;
