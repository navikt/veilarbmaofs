import * as React from 'react';
import { ICVInfo } from "./cv";

function SistEndret(props: Pick<ICVInfo, 'sistEndret'>) {
    const formattertTidspunkt = new Date(props.sistEndret).toLocaleString();

    return (
        <div className="typo-normal italic-gra">
            {`Sist endret: ${formattertTidspunkt}`}
        </div>
    );
}

export default SistEndret;