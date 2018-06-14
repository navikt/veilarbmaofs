import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import * as React from 'react';
import {getConfig, IFetchContext, IInformasjonsElement} from "../../config";
import {AppContext, IAppContext, IAppContextProp, withAppContext} from "../context";
import Datafetcher from "../utils/datafetcher";

import './informasjonsvisning.less';

const noop = () => {}; // tslint:disable-line

function VisningsBolk<DATA>(props: IInformasjonsElement<DATA> & IAppContextProp) {
    const Component = props.component;

    return (
        <Ekspanderbartpanel tittel={props.id} onClick={noop} tittelProps="undertittel">
            <Datafetcher data={props.dataSource}>
                {(data: DATA) => <Component data={data}/>}
            </Datafetcher>
        </Ekspanderbartpanel>
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
