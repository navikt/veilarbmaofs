import * as React from 'react';

import { elementer, IInformasjonsElement } from './../../../config';

import {AppContext, IAppContextProp, withAppContext} from "../../context";
import Datafetcher from "../datafetcher";


function VisningsBolkPure<SOURCE, DATA>(props: IInformasjonsElement<DATA> & IAppContextProp) {
    if (!props.context.valgteKnapper.includes(props.id)) {
        return null;
    }

    const Component = props.component;

    const dataSource: () => Promise<DATA> = props.dataSource;

    return (
        <>
            <h1>{props.id}</h1>
            <Datafetcher data={dataSource}>
                {(data: DATA) => <Component data={data}/>}
            </Datafetcher>
        </>
    );
}

const VisningsBolk = withAppContext<IInformasjonsElement<any>>(AppContext, VisningsBolkPure);

function lagVisningBolk<T>(element: IInformasjonsElement<T>, index: number) {
    return <VisningsBolk {...element} key={index} />
}

const renderElementer: React.ReactNode[] = elementer
    .map(lagVisningBolk);

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
