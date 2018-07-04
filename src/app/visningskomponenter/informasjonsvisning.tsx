import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import * as React from 'react';
import {FetchContext, getConfig, IInformasjonsElement} from "../../config";
import {AppContext, AppContextProp, IAppContext, withAppContext} from "../context";
import Datafetcher from "../utils/datafetcher";

import './informasjonsvisning.less';

const noop = () => {}; // tslint:disable-line

function VisningsBolk<DATA>(props: IInformasjonsElement<DATA> & AppContextProp) {
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

interface Props {
    fetchContext: FetchContext;
}

class Informasjonsvisning extends React.Component<AppContextProp & Props> {
    public render() {
        const renderElementer: React.ReactNode[] = getConfig(this.props.fetchContext)
            .map(lagVisningBolk(this.props.context));

        return (
            <>
                {renderElementer}
            </>
        );
    }
}

export default withAppContext<Props>(AppContext, Informasjonsvisning);
