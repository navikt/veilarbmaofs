import * as React from 'react';
import {FetchContext, getConfig, IInformasjonsElement} from "../../config";
import {AppContext, AppContextProp, IAppContext, withAppContext} from "../context";
import {Feature} from "../persondetaljer";
import './informasjonsvisning.less';
import {VisningsBolk} from "./visningsbolk";

function lagVisningBolk<T>(context: IAppContext) {
    return (element: IInformasjonsElement<T>, index: number) => (
        <VisningsBolk {...element} key={index} context={context}/>
    );
}

interface Props {
    fetchContext: FetchContext;
    feature: Feature;
}

class Informasjonsvisning extends React.Component<AppContextProp & Props> {
    public componentDidMount() {
        (window as any).frontendlogger.event('maofs.detaljer.v2', {}, {});
    }

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
