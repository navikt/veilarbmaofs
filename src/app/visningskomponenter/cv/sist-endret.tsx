import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";

function SistEndret(props: Pick<ArenaPerson, 'sistEndret'>) {
    if (isNullOrUndefined(props.sistEndret)) {
        return null;
    }

    const formattertTidspunkt = new Date(props.sistEndret).toLocaleString();

    return (
        <div className="typo-normal italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </div>
    );
}

export default SistEndret;