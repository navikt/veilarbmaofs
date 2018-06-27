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

class Persondetaljer extends React.Component<AppContextProp & AppProps> {
    public render() {
        const apen = this.props.context.apen;
        const fetchContext: FetchContext = { fnr : this.props.fnr };

        return (
            <React.Fragment key={this.props.fnr}>
                <Tilbakelenke />
                <div
                    className={cls("persondetaljer", {
                        'apen': apen,
                        'lukket': !apen
                    })}
                >
                    <Basisinfo fnr={this.props.fnr} />
                    <Collapse isOpened={apen} className="informasjonsvisning" hasNestedCollapse={true}>
                        <Informasjonsvisning fetchContext={fetchContext} />
                    </Collapse>
                </div>
            </React.Fragment>
        )
    }
}

export default withAppContext<AppProps>(AppContext, Persondetaljer);