import * as React from 'react';
import { FetchContext } from '../config';
import { AppContext, AppContextProp, withAppContext } from './context';
import { AppProps } from './application';
import Informasjonsvisning from './visningskomponenter/informasjonsvisning';
import './persondetaljer.less';
import { getData, SourceConfig } from '../fetch-utils';
import { createOppfolgingsstatusDataSourceConfig, OppfolgingsstatusData } from './datatyper/oppfolgingsstatus';
import Datafetcher from './utils/datafetcher';
import { createOppfolgingDataSourceConfig, OppfolgingData } from './datatyper/oppfolgingData';

export interface Feature {
    [key: string]: boolean;
}

interface PersondetaljerData {
    oppfolgingStatus: OppfolgingsstatusData;
    oppfolging: OppfolgingData;
}

function Persondetaljer(props: AppContextProp & AppProps) {
    const fetchContext: FetchContext = { fnr : props.fnr };
    const sourceConfig: SourceConfig<PersondetaljerData> = {
        oppfolgingStatus: createOppfolgingsstatusDataSourceConfig(fetchContext),
        oppfolging: createOppfolgingDataSourceConfig(fetchContext)
    };

    const data = getData<PersondetaljerData>(sourceConfig);

    function lagNyLayout(oppfolgingstatusData: OppfolgingsstatusData, oppfolging: OppfolgingData) {
        return (
            <div key={props.fnr} className="informasjonsvisning">
                <Informasjonsvisning
                    fetchContext={fetchContext}
                    oppfolgingstatus={oppfolgingstatusData}
                    oppfolging={oppfolging}
                />
            </div>
        );
    }
    return (
        <Datafetcher data={data}>
            {(personDetaljerData: PersondetaljerData) =>
                lagNyLayout(personDetaljerData.oppfolgingStatus, personDetaljerData.oppfolging)}
        </Datafetcher>
    );
}

export default withAppContext<AppProps>(AppContext, Persondetaljer);
