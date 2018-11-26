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

interface PersondetaljerData {
    oppfolging: OppfolgingData;
    feature: Feature;
}

class Persondetaljer extends React.Component<AppContextProp & AppProps> {
    public render() {
        const apen = this.props.context.apen;
        const fetchContext: FetchContext = { fnr : this.props.fnr };

        const sourceConfig: SourceConfig<PersondetaljerData> = {
            feature: {
                allwaysUseFallback: true,
                fallback: { "mao.vise_registrering": false},
                url: '/feature/?feature=mao.vise_registrering'
            },
            oppfolging: createOppfolgingDataSourceConfig(fetchContext)
        };

        const data = getData<PersondetaljerData>(sourceConfig);

        return (
            <React.Fragment key={this.props.fnr}>
                <Tilbakelenke enhet={this.props.enhet}/>
                <div
                    className={cls("persondetaljer", {
                        'apen': apen,
                        'lukket': !apen
                    })}
                >
                    <Datafetcher data={data}>
                        {(a: PersondetaljerData) => {
                            return (
                                <>
                                    <Basisinfo fnr={this.props.fnr} oppfolging={a.oppfolging}/>
                                    <UtvidetInfo fetchContext={fetchContext} isOpened={apen} feature={a.feature} oppfolging={a.oppfolging}/>
                                </>
                            );
                        }}
                    </Datafetcher>
                </div>
            </React.Fragment>
        )
    }
}

interface Props {
    fetchContext: FetchContext;
    isOpened: boolean;
    oppfolging: OppfolgingData;
    feature: Feature;
}

function UtvidetInfo(props: Props) {

    const { isOpened, fetchContext, feature, oppfolging } = props;

    return (
        <Collapse isOpened={isOpened} className="informasjonsvisning" hasNestedCollapse={true}>
            <Informasjonsvisning fetchContext={fetchContext} feature={feature} oppfolging={oppfolging} />
        </Collapse>
    );

}


export default withAppContext<AppProps>(AppContext, Persondetaljer);
