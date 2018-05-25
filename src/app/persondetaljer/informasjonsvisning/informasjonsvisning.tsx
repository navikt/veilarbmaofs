import * as React from 'react';

import { elementer, IInformasjonsElement } from './../../../config';

import {AppContext, IAppContextProp, withAppContext} from "../../context";
import Datafetcher from "../datafetcher";


function VisningsBolkPure(props: IInformasjonsElement & IAppContextProp) {
    if (!props.context.valgteKnapper.includes(props.id)) {
        return null;
    }

    const Component = props.component;

    return (
        <>
            <h1>{props.id}</h1>
            <Datafetcher url={props.url}>
                {(data) => <Component data={data}/>}
            </Datafetcher>
        </>
    );
}

const VisningsBolk = withAppContext<IInformasjonsElement>(AppContext, VisningsBolkPure);

const renderElementer: React.ReactNode[] = elementer
    .map((element: IInformasjonsElement) => <VisningsBolk key={element.id} {...element} />);

class Informasjonsvisning extends React.Component<IAppContextProp> {
    public render() {
        if (!this.props.context.apen) {
            return null;
        }

        return (
            <div className="informasjonsvisning">
                {renderElementer}
            </div>
        );
    }
}

export default withAppContext<{}>(AppContext, Informasjonsvisning);
