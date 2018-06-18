import * as React from 'react';

import { getData, SourceConfig } from "../../fetch-utils";
import { IAppProps } from "../application";
import { IPersonaliaInfo } from "../visningskomponenter/personalia/personalia";
import ApneLukkeKnapp from './apne-lukke-knapp';
import KvinneIkon from './kvinne.svg';
import MannIkon from './mann.svg';

import Datafetcher from "../utils/datafetcher";
import { kalkulerAlder } from "../utils/date-utils";

import './basisinfo.less';

function render( { personalia }: { personalia: IPersonaliaInfo }) {
    const alder = kalkulerAlder(new Date(personalia.fodselsdato));
    const ikon = personalia.kjonn === "K" ? KvinneIkon : MannIkon;

    return (
        <>
            <img src={ikon} className="basisinfo__ikon"/>
            <div className="basisinfo__personalia">
                <div className="basisinfo__personalia">
                    <h1 className="basisinfo__navnogalder typo-innholdstittel">
                        {personalia.sammensattNavn}
                        <span> {`${alder} år`}</span>
                    </h1>
                    <span className="basisinfo__fodselsnummer">{personalia.fodselsnummer}</span>
                </div>
            </div>
        </>
    );
}

function Basisinfo({ fnr }: IAppProps) {
    const sourceConfig: SourceConfig<{personalia: string}> = {
        personalia: `/veilarbperson/api/person/${fnr}`
    };

    const data = getData<{ personalia: IPersonaliaInfo }>(sourceConfig);

    return (
        <>
            <Datafetcher data={data}>
                { render }
            </Datafetcher>
            <div className="basisinfo__apnelukke">
                <ApneLukkeKnapp />
            </div>
        </>
    );
}

export default Basisinfo;