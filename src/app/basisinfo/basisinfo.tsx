import * as React from 'react';

import ApneLukkeKnapp from './apne-lukke-knapp';
import KvinneIkon from './kvinne.svg';
import MannIkon from './mann.svg';

import './basisinfo.less';

function Basisinfo() {
    const ikon = Math.random() > 0.5 ? KvinneIkon : MannIkon;

    return (
        <>
            <img src={ikon} className="basisinfo__ikon"/>
            <div className="basisinfo__personalia">
                <h1 className="basisinfo__navnogalder typo-innholdstittel">
                    {`Bruce Wayne`}
                    <span> {`${`38`} år`}</span>
                </h1>
                <span className="basisinfo__fodselsnummer">{`1010800398`}</span>
            </div>
            <div className="basisinfo__apnelukke">
                <ApneLukkeKnapp />
            </div>
        </>
    );
}


export default Basisinfo;