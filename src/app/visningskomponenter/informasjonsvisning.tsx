import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import * as React from 'react';
import {FetchContext, getConfig, IInformasjonsElement} from "../../config";
import {AppContext, AppContextProp, IAppContext, withAppContext} from "../context";
import Datafetcher from "../utils/datafetcher";

import {Feature} from "../persondetaljer";
import './informasjonsvisning.less';

function onClick(id: string) {
    return () => (window as any).frontendlogger.event('maofs.lamel-click', {'lamel': id}, {});
}

function VisningsBolk<DATA>(props: IInformasjonsElement<DATA> & AppContextProp) {
    const Component = props.component;

    return (
        <Ekspanderbartpanel tittel={props.id} onClick={onClick(props.id)} tittelProps="undertittel">
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
    feature: Feature;
}

class Informasjonsvisning extends React.Component<AppContextProp & Props> {
    public render() {
        const renderElementer: React.ReactNode[] = getConfig(this.props.fetchContext, this.props.feature)
            .map(lagVisningBolk(this.props.context));

        return (
            <>
                {renderElementer}
            </>
        );
    }
}

export default withAppContext<Props>(AppContext, Informasjonsvisning);
