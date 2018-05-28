import * as classNames from "classnames";
import * as React from 'react';

import {AppContext, IAppContextProp, withAppContext} from "../context";

const cls = (apen: boolean) => classNames('chevron', {
    'chevron--ned': !apen,
    'chevron--opp': apen
});

function ApneLukkeKnapp(props: IAppContextProp) {
    return (
        <button
            className="undertekst toggle-persondetaljer"
            aria-pressed={props.context.apen}
            onClick={props.context.toggleApen}
        >
            <span className="toggle-persondetaljer__tekst">
                Detaljer {/*TODO: tekst */}
            </span>
            <i className={cls(props.context.apen)}/>
        </button>
    );
}

export default withAppContext<{}>(AppContext, ApneLukkeKnapp);