import { DateTime } from 'luxon';
import * as React from 'react';
import { ICVInfo } from "./cv";

function SistEndret(props: Pick<ICVInfo, 'sistEndret'>) {
    const formattertTidspunkt = DateTime.fromISO(props.sistEndret).toLocaleString();

    return (
        <div className="typo-normal italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </div>
    );
}

export default SistEndret;