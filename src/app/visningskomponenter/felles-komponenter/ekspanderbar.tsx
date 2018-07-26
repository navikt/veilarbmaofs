import NavFrontendChevron from "nav-frontend-chevron";
import Normaltekst from "nav-frontend-typografi/lib/normaltekst";
import * as React from 'react';
import {Collapse} from "react-collapse";
import './ekspanderbar.less'

interface State {
    apen: boolean;
}

interface Props {
    tekst: string;
    lenketekst: string;
}

export class Ekspanderbar extends React.Component<Props, State> {
    public state: State = {
        apen: false
    };

    constructor(props: Props) {
        super(props);
        this.toggleApen = this.toggleApen.bind(this);
    }

    public toggleApen() {
        this.setState({ apen: !this.state.apen });
    }

    public render() {
        const apen = this.state.apen;
        const chevronType = apen ? 'opp' : 'ned';

        return (
            <>
                <div onClick={this.toggleApen} className="ekspanderbar-lenke">
                    <Normaltekst>
                        {this.props.tekst}
                        <span className="lenketekst">{this.props.lenketekst}</span>
                        <NavFrontendChevron type={chevronType} />
                    </Normaltekst>
                </div>
                <Collapse isOpened={apen}>
                    {this.props.children}
                </Collapse>
            </>
        );
    }
}
