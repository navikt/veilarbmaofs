import * as React from 'react';
import {getData, SourceConfig} from "../../fetch-utils";
import {AppProps} from "../application";
import Datafetcher from "../utils/datafetcher";
import {BasisinfoData, renderBasisInfo} from "./basisinfo-visning";
import './basisinfo.less';

function Basisinfo({fnr}: AppProps) {
    const sourceConfig: SourceConfig<BasisinfoData> = {
        feature: '/feature/?feature=mao.trenger_vurdering',
        oppfolging: `/veilarboppfolging/api/person/${fnr}/oppfolgingsstatus`,
        personalia: `/veilarbperson/api/person/${fnr}`
    };

    const data = getData<BasisinfoData>(sourceConfig);

    return (
        <>
        <Datafetcher data={data}>
            {renderBasisInfo}
        </Datafetcher>
        </>
    );
}

export default Basisinfo;
