import * as React from 'react';
import {getData, SourceConfig} from "../../../fetch-utils";
import {VeilederData} from "../../datatyper/veileder";
import Datafetcher from "../../utils/datafetcher";
import InformasjonsbolkEnkel from "../felles-komponenter/informasjonsbolk-enkel";
import {StringOrNull} from "../felles-typer";
import VeilederPlaceholder from "./veileder-placeholder";


export function renderVeilder({ veileder }: { veileder: VeilederData }) {
    const veilederStr = veileder ? `${veileder.navn} (${veileder.ident})` : null;
    return <InformasjonsbolkEnkel header="Veileder:" 
                                  value={veilederStr} 
                                  defaultValue="-"/>

}

interface VeilederProps{
    veilederId: StringOrNull;
}

export function Veileder(props: VeilederProps){

    const sourceConfig: SourceConfig<{veileder: VeilederData}> = {
        veileder: `/veilarbveileder/api/veileder/${props.veilederId}`
    };

    const data = getData<{ veileder: VeilederData }>(sourceConfig);

    return <Datafetcher data={data} loader={VeilederPlaceholder}>
        { renderVeilder }
    </Datafetcher>

}