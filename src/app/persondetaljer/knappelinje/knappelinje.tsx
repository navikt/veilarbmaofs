import * as classNames from "classnames";
import * as React from 'react';
import {elementer, IInformasjonsElement} from '../../../config';

import Grid from "../../grid";

import {AppContext, IAppContextProp, withAppContext} from "../../context";

import './knappelinje.less';

function InfoKnappPure(props: IInformasjonsElement<any> & IAppContextProp & React.HtmlHTMLAttributes<HTMLButtonElement>) {
    const handleClick = () => props.context.toggleKnapp(props.id);
    const cls = classNames('knapp', {
        'knapp--valgt': props.context.valgteKnapper.includes(props.id)
    });

    return (
        <button onClick={handleClick} className={cls} style={props.style}>
            <span>
                {props.id}
            </span>
        </button>
    );
}
const InfoKnapp = withAppContext<IInformasjonsElement<any>>(AppContext, InfoKnappPure);


const renderElementer: React.ReactNode[] = elementer
    .map((element) => <InfoKnapp key={element.id} {...element}/>);

function Knappelinje(props: IAppContextProp) {
    if (!props.context.apen) {
        return null;
    }

    return (
        <Grid className="knappelinje" columns={elementer.length} gap="0.5rem">
            {renderElementer}
        </Grid>
    );
}

export default withAppContext<{}>(AppContext, Knappelinje);