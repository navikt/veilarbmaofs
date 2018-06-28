import * as React from 'react';
import {getData, SourceConfig} from "../../../fetch-utils";
import {VeilederData} from "../../datatyper/veileder";
import Datafetcher from "../../utils/datafetcher";
import InformasjonsbolkEnkel from "../felles-komponenter/informasjonsbolk-enkel";
import {StringOrNull} from "../felles-typer";
import VeilederPlaceholder from "./veileder-placeholder";

export function renderVeileder(props: VeilederData) {
    const {ident, navn, ...rest} = props;
    const veilederStr = ident ? `${navn} (${ident})` : null;
    return <InformasjonsbolkEnkel header="Veileder:" 
                                  value={veilederStr} 
                                  defaultValue="-"
                                  {...rest}/>
}

interface VeilederProps{
    veilederId: StringOrNull;
}

export function Veileder(props: VeilederProps){
    const {veilederId, ...rest } = props;
    const sourceConfig: SourceConfig<{veileder: VeilederData}> = {
        veileder: `/veilarbveileder/api/veileder/${veilederId}`
    };

    const data = getData<{ veileder: VeilederData }>(sourceConfig);

    return <Datafetcher data={data} loader={VeilederPlaceholder}>
        { (resp) => renderVeileder({...resp.veileder, ...rest}) }
    </Datafetcher>

}