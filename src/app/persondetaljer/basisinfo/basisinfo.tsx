import * as React from 'react';

import './basisinfo.less';

const Basisinfo = () =>
    (
        <div className="basisinfo">
            <i className="ikon--kjonn"/>
            <h1 className="basisinfo__navnogalder typo-innholdstittel">
                {`Bruce Wayne`}
                <span> {`${`38`} år`}</span>
            </h1>
            <span className="basisinfo__fodselsnummer">{`1010800398`}</span>
        </div>
    );

export default Basisinfo;