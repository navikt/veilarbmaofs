import * as classNames from "classnames";
import * as React from 'react';
import {getConfig, IFetchContext, IInformasjonsElement} from '../../../config';

import {AppContext, IAppContextProp, withAppContext} from "../../context";

import './knappelinje.less';

function InfoKnapp(props: IInformasjonsElement<any> & IAppContextProp & React.HtmlHTMLAttributes<HTMLButtonElement>) {
    const handleClick = () => props.context.toggleKnapp(props.id);
    const cls = classNames('knapp', {
        'knapp--valgt': props.context.valgteKnapper.includes(props.id)
    });

    return (
        <button onClick={handleClick} className={cls}>
            {props.id}
        </button>
    );
}

interface IProps {
    fetchContext: IFetchContext;
}

function Knappelinje(props: IAppContextProp & IProps) {
    if (!props.context.apen) {
        return null;
    }

    const renderElementer: React.ReactNode[] = getConfig(props.fetchContext)
        .map((element) => <InfoKnapp key={element.id} {...element} context={props.context} />);

    return (
        <div className="knappelinje" >
            {renderElementer}
        </div>
    );
}

export default withAppContext<IProps>(AppContext, Knappelinje);