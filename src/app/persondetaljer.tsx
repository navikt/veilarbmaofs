import * as cls from 'classnames';
import * as React from 'react';

import { FetchContext } from "../config";
import { AppContext, AppContextProp, withAppContext } from "./context";

import { AppProps } from "./application";
import Basisinfo from "./basisinfo/basisinfo";
import Tilbakelenke from "./tilbakelenke";
import Informasjonsvisning from "./visningskomponenter/informasjonsvisning";

import './persondetaljer.less';

import { UnmountClosed as Collapse } from 'react-collapse';
import {getData, SourceConfig} from "../fetch-utils";
import {createOppfolgingDataSourceConfig, OppfolgingData} from "./datatyper/oppfolging";
import Datafetcher from "./utils/datafetcher";

export interface Feature {
    [key: string]: boolean;
}

interface UtvidetInfoData {
    feature: Feature;
    oppfolging: OppfolgingData;
}

class Persondetaljer extends React.Component<AppContextProp & AppProps> {
    public render() {
        const apen = this.props.context.apen;
        const fetchContext: FetchContext = { fnr : this.props.fnr };

        return (
            <React.Fragment key={this.props.fnr}>
                <Tilbakelenke enhet={this.props.enhet}/>
                <div
                    className={cls("persondetaljer", {
                        'apen': apen,
                        'lukket': !apen
                    })}
                >
                    <Basisinfo fnr={this.props.fnr} />
                    <UtvidetInfo fetchContext={fetchContext} isOpened={apen}/>
                </div>
            </React.Fragment>
        )
    }
}
interface Props {
    fetchContext: FetchContext;
    isOpened: boolean;

}
function UtvidetInfo(props: Props) {
    const sourceConfig: SourceConfig<UtvidetInfoData> = {
        feature: {
            allwaysUseFallback: true,
            fallback: { "mao.vise_registrering": false},
            url: '/feature/?feature=mao.vise_registrering'
        },
        oppfolging: createOppfolgingDataSourceConfig(props.fetchContext),
    };

    const data = getData<UtvidetInfoData>(sourceConfig);

    return (
        <Datafetcher data={data} loader={returnNull}>
            {(a: UtvidetInfoData) =>
                <Collapse isOpened={props.isOpened} className="informasjonsvisning" hasNestedCollapse={true}>
                    <Informasjonsvisning fetchContext={props.fetchContext} feature={a.feature} oppfolging={a.oppfolging} />
                </Collapse>
            }
        </Datafetcher>
    )
}

function returnNull() {
    return null;
}

export default withAppContext<AppProps>(AppContext, Persondetaljer);
