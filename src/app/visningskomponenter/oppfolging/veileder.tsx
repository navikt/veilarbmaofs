import * as React from 'react';
import {getData, SourceConfig} from "../../../fetch-utils";
import {VeilederData} from "../../datatyper/veileder";
import Datafetcher from "../../utils/datafetcher";
import EMDASH from "../../utils/emdash";
import InformasjonsbolkEnkel from "../felles-komponenter/informasjonsbolk-enkel";
import {StringOrNothing} from "../felles-typer";

interface VeilederProps {
    veilederId: StringOrNothing;
}

export function Veileder(props: VeilederProps) {
    const {veilederId, ...rest} = props;

    if (!veilederId) {
        return <div {...rest}>
            <InformasjonsbolkEnkel header="Veileder" defaultValue={EMDASH}/>
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
                return <InformasjonsbolkEnkel header="Veileder" value={veilederStr} defaultValue={EMDASH}/>
            }}
        </Datafetcher>
    </div>

}
