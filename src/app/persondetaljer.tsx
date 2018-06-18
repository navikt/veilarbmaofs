import * as cls from 'classnames';
import * as React from 'react';

import { IFetchContext } from "../config";
import { AppContext, IAppContextProp, withAppContext } from "./context";

import { IAppProps } from "./application";
import Basisinfo from "./basisinfo/basisinfo";
import Tilbakelenke from "./tilbakelenke";
import Informasjonsvisning from "./visningskomponenter/informasjonsvisning";

import './persondetaljer.less';

class Persondetaljer extends React.Component<IAppContextProp & IAppProps> {
    public render() {
        const apen = this.props.context.apen;
        const fetchContext: IFetchContext = { fnr : this.props.fnr };

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
                    <Informasjonsvisning fetchContext={fetchContext} />
                </div>
            </React.Fragment>
        )
    }
}

export default withAppContext<IAppProps>(AppContext, Persondetaljer);