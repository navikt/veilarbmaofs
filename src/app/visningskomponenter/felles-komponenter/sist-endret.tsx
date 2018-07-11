import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";

import { Normaltekst } from 'nav-frontend-typografi';
import {formaterDato} from "../utils";

function SistEndret(props: Pick<ArenaPerson, 'sistEndret'>) {
    if (isNullOrUndefined(props.sistEndret)) {
        return null;
    }

    const formattertTidspunkt = formaterDato(props.sistEndret);

    return (
        <Normaltekst className="italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </Normaltekst>
    );
}

export default SistEndret;
