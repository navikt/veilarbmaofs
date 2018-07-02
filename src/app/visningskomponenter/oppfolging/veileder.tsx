import * as React from 'react';
import {getData, SourceConfig} from "../../../fetch-utils";
import {VeilederData} from "../../datatyper/veileder";
import Datafetcher from "../../utils/datafetcher";
import InformasjonsbolkEnkel from "../felles-komponenter/informasjonsbolk-enkel";
import {StringOrNull} from "../felles-typer";
import VeilederPlaceholder from "./veileder-placeholder";

function VeilederInformasjonbolkEnkel(props: {value?: string}){
    const {value, ...rest} = props;
    return <InformasjonsbolkEnkel header="Veileder"
                                  value={value}
                                  defaultValue="-"
                                  {...rest}/>
}

interface VeilederProps{
    veilederId: StringOrNull;
}

export function Veileder(props: VeilederProps){
    const {veilederId, ...rest } = props;

    if (!veilederId){
        return <VeilederInformasjonbolkEnkel {...rest}/>;
    }

    const sourceConfig: SourceConfig<{veileder: VeilederData}> = {
        veileder: `/veilarbveileder/api/veileder/${veilederId}`
    };

    const data = getData<{ veileder: VeilederData }>(sourceConfig);

    return <Datafetcher data={data} loader={VeilederPlaceholder}>
        { (resp: { veileder: VeilederData }) => {
            const {ident, navn } = resp.veileder;
            const veilederStr = ident ? `${navn} (${ident})` : undefined;
            return <VeilederInformasjonbolkEnkel value={veilederStr} {...rest}/>
        }}
    </Datafetcher>

}