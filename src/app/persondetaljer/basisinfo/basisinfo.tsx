import * as React from 'react';

import './basisinfo.less';

const Basisinfo = () =>
    (
        <>
            <div className="basisinfo">
                <i className="ikon--kjonn"/>
                <h1 className="basisinfo__navnogalder typo-innholdstittel">
                    {`props.navn`}
                    <span> {`${`props.alder`} år`}</span>
                </h1>
                <span className="basisinfo__fodselsnummer">`${`props.fodselsnummer`}`</span>
            </div>
        </>

    );

export default Basisinfo;