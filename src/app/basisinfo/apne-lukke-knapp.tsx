import Chevron from 'nav-frontend-chevron';
import * as React from 'react';

import './apne-lukke-knapp.less';

import {AppContext, AppContextProp, withAppContext} from "../context";

function ApneLukkeKnapp(props: AppContextProp) {
    const apen = props.context.apen;
    const retning = apen ? 'opp' : 'ned';
    return (
        <div className="basisinfo__apnelukke">
            <button
                className="undertekst apne-lukke-knapp"
                aria-pressed={apen}
                onClick={props.context.toggleApen}
            >
            <span className="apne-lukke-knapp__tekst">
                Detaljer
            </span>
                <Chevron type={retning}/>
            </button>
        </div>
    );
}

export default withAppContext<{}>(AppContext, ApneLukkeKnapp);