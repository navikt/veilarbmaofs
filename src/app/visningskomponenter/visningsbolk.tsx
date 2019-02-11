import * as React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { InformasjonsElement } from '../../config';
import { AppContextProp } from '../context';
import Datafetcher from '../utils/datafetcher';

interface VisningsbolkState {
    apen: boolean;
}

type Props<DATA> = InformasjonsElement<DATA> & AppContextProp;

export class VisningsBolk<DATA> extends React.Component<Props<DATA>, VisningsbolkState> {

    constructor(props: Props<DATA>) {
        super(props);
        this.state = { apen: false };
        this.onClick = this.onClick.bind(this);
    }

    public onClick() {
        const apen = !this.state.apen;
        this.setState({apen});
        const eventType = apen ? 'open' : 'close';
        (window as any).frontendlogger.event('maofs.lamell-click.v2', {}, {lamell: this.props.id, type: eventType});
    }

    public render() {
        const Component = this.props.component;

        return (
            <Ekspanderbartpanel tittel={this.props.id} onClick={this.onClick} tittelProps="undertittel">
                <Datafetcher data={this.props.dataSource}>
                    {(data: DATA) => <Component data={data}/>}
                </Datafetcher>
            </Ekspanderbartpanel>
        );
    }
}
