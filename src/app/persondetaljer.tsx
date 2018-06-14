import * as cls from 'classnames';
import * as React from 'react';

import {IFetchContext} from "../config";
import { AppContext, IAppContextProp, withAppContext } from "./context";

import Basisinfo from "./basisinfo/basisinfo";
import Tilbakelenke from "./tilbakelenke";
import Informasjonsvisning from "./visningskomponenter/informasjonsvisning";

import './persondetaljer.less';

class Persondetaljer extends React.Component<IAppContextProp> {
    public render() {
        const apen = this.props.context.apen;
        const fetchContext: IFetchContext = {fnr : "1234567899"};

        return (
            <>
                <Tilbakelenke />
                <div
                    className={cls("persondetaljer", {
                        'apen': apen,
                        'lukket': !apen
                    })}
                >
                    <Basisinfo />
                    <Informasjonsvisning fetchContext={fetchContext} />
                </div>
            </>
        )
    }
}

export default withAppContext<{}>(AppContext, Persondetaljer);