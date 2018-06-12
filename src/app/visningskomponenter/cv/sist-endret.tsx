import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import { ICVInfo } from "./cv";

function SistEndret(props: Pick<ICVInfo, 'sistEndret'>) {
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