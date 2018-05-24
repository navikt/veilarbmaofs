import * as React from 'react';
// import HiddenIfHOC from '../../../components/hidden-if';
import { elementer } from '../../../config';

import './knappelinje.less';

function KnapperFraConfig() {
        return <>
            {elementer.map(element => (
                <button key={element.id}>
                    <span>
                        {element.id}
                    </span>
                </button>
            ))}
        </>;
}

const Knappelinje = () => {
    return (
        <div className="knappelinje">
            <KnapperFraConfig />
        </div>
    );
};
export default Knappelinje;
// export default HiddenIfHOC(Knappelinje);