import * as React from 'react';
import {getData, SourceConfig} from "../../fetch-utils";
import {AppProps} from "../application";
import {PersonaliaInfo} from "../datatyper/personalia";
import Datafetcher from "../utils/datafetcher";
import {renderBasisInfo} from "./basisinfo-visning";
import './basisinfo.less';
import {Placeholder} from "./placeholder";


function Basisinfo({fnr}: AppProps) {
    const sourceConfig: SourceConfig<{ personalia: string }> = {
        personalia: `/veilarbperson/api/person/${fnr}`
    };

    const data = getData<{ personalia: PersonaliaInfo }>(sourceConfig);

    return (
        <>
        <Datafetcher data={data} loader={Placeholder}>
            {renderBasisInfo}
        </Datafetcher>
        </>
    );
}

export default Basisinfo;