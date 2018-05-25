import * as cls from 'classnames';
import * as React from 'react';

import ApneLukkeKnapp from './apne-lukke-knapp';
import Basisinfo from "./basisinfo/basisinfo";
import Informasjonsvisning from "./informasjonsvisning/informasjonsvisning";
import Knappelinje from './knappelinje/knappelinje';
import Tilbakelenke from "./tilbakelenke";

import {AppContext, IAppContextProp, withAppContext} from "../context";

import './persondetaljer.less';

class Persondetaljer extends React.Component<IAppContextProp> {
    public render() {
        const apen = this.props.context.apen;

        return (
            <div className="container">
                <Tilbakelenke/>
                <div
                    className={cls("panel--stor ", {
                        'apen': apen,
                        'lukket': !apen
                    })}
                >
                    <div className="persondetaljer">
                        <ApneLukkeKnapp/>
                        <Basisinfo/>

                        <Knappelinje/>
                        <Informasjonsvisning/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAppContext<{}>(AppContext, Persondetaljer);