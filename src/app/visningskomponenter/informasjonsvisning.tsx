import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import * as React from 'react';

import { elementer, IInformasjonsElement } from '../../config';

import {AppContext, IAppContextProp, withAppContext} from "../context";
import Datafetcher from "../utils/datafetcher";

import './informasjonsvisning.less';

const noop = () => {}; // tslint:disable-line

function VisningsBolkPure<SOURCE, DATA>(props: IInformasjonsElement<DATA> & IAppContextProp) {
    const Component = props.component;

    const dataSource: () => Promise<DATA> = props.dataSource;

    return (
        <Ekspanderbartpanel tittel={props.id} onClick={noop} tittelProps="undertittel">
            <Datafetcher data={dataSource}>
                {(data: DATA) => <Component data={data}/>}
            </Datafetcher>
        </Ekspanderbartpanel>
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
