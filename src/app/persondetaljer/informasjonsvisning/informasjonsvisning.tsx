import * as React from 'react';

import {getConfig, IFetchContext, IInformasjonsElement} from '../../../config';

import {AppContext, IAppContext, IAppContextProp, withAppContext} from "../../context";
import Datafetcher from "../datafetcher";

import './informasjonsvisning.less';


function VisningsBolk<DATA>(props: IInformasjonsElement<DATA> & IAppContextProp) {
    if (!props.context.valgteKnapper.includes(props.id)) {
        return null;
    }

    const Component = props.component;

    return (
        <div className="informasjonselement">
            <div className="typo-innholdstittel informasjonsbolk">{props.id}</div>
            <Datafetcher data={props.dataSource}>
                {(data: DATA) => <Component data={data}/>}
            </Datafetcher>
        </div>
    );
}

function lagVisningBolk<T>(context: IAppContext) {
    return (element: IInformasjonsElement<T>, index: number) => (
        <VisningsBolk {...element} key={index} context={context} />
    );
}

interface IProps {
    fetchContext: IFetchContext;
}

class Informasjonsvisning extends React.Component<IAppContextProp & IProps> {
    public render() {
        if (!this.props.context.apen) {
            return null;
        }

        const renderElementer: React.ReactNode[] = getConfig(this.props.fetchContext)
            .map(lagVisningBolk(this.props.context));

        return (
            <div className="informasjonsvisning">
                {renderElementer}
            </div>
        );
    }
}

export default withAppContext<IProps>(AppContext, Informasjonsvisning);
