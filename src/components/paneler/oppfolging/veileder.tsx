import React from 'react';
import { getData, SourceConfig } from '../../../utils/fetch-utils';
import { VeilederData } from '../../../rest/datatyper/veileder';
import Datafetcher from '../../datafetcher';
import EMDASH from '../../../utils/emdash';
import InformasjonsbolkEnkel from '../../felles/informasjonsbolk-enkel';
import { StringOrNothing } from '../../../utils/felles-typer';

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
                return <InformasjonsbolkEnkel header="Veileder" value={veilederStr} defaultValue={EMDASH}/>;
            }}
        </Datafetcher>
    </div>;

}
