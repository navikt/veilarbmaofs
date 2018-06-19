import * as React from 'react';

import { Normaltekst } from 'nav-frontend-typografi';

import {isNullOrUndefined} from "../../utils/util";
import { ICVInfo } from "./cv";

function SistEndret(props: Pick<ICVInfo, 'sistEndret'>) {
    if (isNullOrUndefined(props.sistEndret)) {
        return null;
    }

    const formattertTidspunkt = new Date(props.sistEndret).toLocaleString();

    return (
        <Normaltekst className="italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default SistEndret;