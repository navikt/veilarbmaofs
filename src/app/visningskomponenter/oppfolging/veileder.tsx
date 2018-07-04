import * as React from 'react';
import {getData, SourceConfig} from "../../../fetch-utils";
import {VeilederData} from "../../datatyper/veileder";
import Datafetcher from "../../utils/datafetcher";
import InformasjonsbolkEnkel from "../felles-komponenter/informasjonsbolk-enkel";
import {StringOrNull} from "../felles-typer";

interface VeilederProps {
    veilederId: StringOrNull;
}

export function Veileder(props: VeilederProps) {
    const {veilederId, ...rest} = props;

    if (!veilederId) {
        return <div {...rest}>
            <InformasjonsbolkEnkel header="Veileder" defaultValue="-"/>
        </div>;
    }

    const sourceConfig: SourceConfig<{ veileder: VeilederData }> = {
        veileder: `/veilarbveileder/api/veileder/${veilederId}`
    };

    const data = getData<{ veileder: VeilederData }>(sourceConfig);

    return <div {...rest}>
        <Datafetcher data={data}>
            {(resp: { veileder: VeilederData }) => {
                const {ident, navn} = resp.veileder;
                const veilederStr = ident ? `${navn} (${ident})` : undefined;
                return <InformasjonsbolkEnkel header="Veileder" value={veilederStr}/>
            }}
        </Datafetcher>
    </div>

}