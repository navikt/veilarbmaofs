import Chevron  from 'nav-frontend-chevron';
import * as React from 'react';

import './apne-lukke-knapp.less';

import {AppContext, IAppContextProp, withAppContext} from "../context";

function ApneLukkeKnapp(props: IAppContextProp) {
    const apen = props.context.apen;
    const retning = apen ? 'opp' : 'ned';
    return (
        <button
            className="undertekst apne-lukke-knapp"
            aria-pressed={apen}
            onClick={props.context.toggleApen}
        >
            <span className="apne-lukke-knapp__tekst">
                Detaljer {/*TODO: tekst */}
            </span>
            <Chevron type={retning} />
        </button>
    );
}

export default withAppContext<{}>(AppContext, ApneLukkeKnapp);