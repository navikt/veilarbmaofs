import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
import { isNullOrUndefined } from '../../utils/util';

import { Normaltekst } from 'nav-frontend-typografi';

function SistEndret(props: Pick<ArenaPerson, 'sistEndret'>) {
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
