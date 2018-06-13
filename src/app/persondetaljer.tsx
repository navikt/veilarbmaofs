import * as cls from 'classnames';
import * as React from 'react';

import Basisinfo from "./basisinfo/basisinfo";
import Tilbakelenke from "./tilbakelenke";
import Informasjonsvisning from "./visningskomponenter/informasjonsvisning";

import { AppContext, IAppContextProp, withAppContext } from "./context";

import './persondetaljer.less';

class Persondetaljer extends React.Component<IAppContextProp> {
    public render() {
        const apen = this.props.context.apen;

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
                    <Informasjonsvisning />
                </div>
            </>
        )
    }
}

export default withAppContext<{}>(AppContext, Persondetaljer);