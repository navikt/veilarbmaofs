import * as React from 'react';
import {FetchContext, getConfig, IInformasjonsElement} from "../../config";
import {AppContext, AppContextProp, IAppContext, withAppContext} from "../context";
import {OppfolgingData} from "../datatyper/oppfolging";
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
    oppfolging: OppfolgingData;
}

class Informasjonsvisning extends React.Component<AppContextProp & Props> {
    public componentDidMount() {
        (window as any).frontendlogger.event('maofs.detaljer.v2', {}, {});
    }

    public render() {

        const { fetchContext, feature, oppfolging, context } = this.props;

        const renderElementer: React.ReactNode[] = getConfig(fetchContext, feature, oppfolging)
            .map(lagVisningBolk(context));

        return (
            <>
                {renderElementer}
            </>
        );
    }
}

export default withAppContext<Props>(AppContext, Informasjonsvisning);
