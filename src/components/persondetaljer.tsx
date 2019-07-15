import * as React from 'react';
import { FetchContext } from '../utils/config';
import { AppContext, AppContextProp, withAppContext } from '../context';
import { AppProps } from '../app';
import Informasjonsvisning from './informasjonsvisning';
import './persondetaljer.less';
import { getData, SourceConfig } from '../utils/fetch-utils';
import { createOppfolgingsstatusDataSourceConfig, OppfolgingsstatusData } from '../rest/datatyper/oppfolgingsstatus';
import Datafetcher from '../utils/datafetcher';

export interface Feature {
    [key: string]: boolean;
}

interface PersondetaljerData {
    oppfolgingStatus: OppfolgingsstatusData;
}

function Persondetaljer(props: AppContextProp & AppProps) {
    const fetchContext: FetchContext = { fnr : props.fnr };
    const sourceConfig: SourceConfig<PersondetaljerData> = {
        oppfolgingStatus: createOppfolgingsstatusDataSourceConfig(fetchContext)
    };

    const data = getData<PersondetaljerData>(sourceConfig);

    function lagNyLayout(oppfolgingstatusData: OppfolgingsstatusData) {
        return (
            <div key={props.fnr} className="informasjonsvisning">
                <Informasjonsvisning
                    fetchContext={fetchContext}
                    oppfolgingstatus={oppfolgingstatusData}
                />
            </div>
        );
    }
    return (
        <Datafetcher data={data}>
            {(personDetaljerData: PersondetaljerData) =>
                lagNyLayout(personDetaljerData.oppfolgingStatus)}
        </Datafetcher>
    );
}

export default withAppContext<AppProps>(AppContext, Persondetaljer);
