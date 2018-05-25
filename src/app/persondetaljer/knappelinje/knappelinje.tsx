import * as React from 'react';
import {elementer, IInformasjonsElement} from '../../../config';

import {AppContext, IAppContextProp, withAppContext} from "../../context";
import './knappelinje.less';

function InfoKnappPure(props: IInformasjonsElement & IAppContextProp) {
    const handleClick = () => props.context.toggleKnapp(props.id);

    return (
        <button onClick={handleClick}>
                <span>
                    {props.id}
                </span>
        </button>
    );
}
const InfoKnapp = withAppContext<IInformasjonsElement>(AppContext, InfoKnappPure);


const renderElementer: React.ReactNode[] = elementer
    .map((element) => <InfoKnapp key={element.id} {...element}/>);

function Knappelinje(props: IAppContextProp) {
    if (!props.context.apen) {
        return null;
    }

    return (
        <div className="knappelinje">
            {renderElementer}
        </div>
    );
}

export default withAppContext<{}>(AppContext, Knappelinje);