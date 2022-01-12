import React from 'react';
import { Collapse } from 'react-collapse';
import './ekspanderbar.less';
import { BodyShort } from '@navikt/ds-react';
import { Collapse as CollapseIcon, Expand as ExpandIcon } from '@navikt/ds-icons';

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

		return (
			<>
				<div onClick={this.toggleApen} className="ekspanderbar-lenke">
					<BodyShort>
						{this.props.tekst}
						<span className="lenketekst">{this.props.lenketekst}</span>
						{apen ? <CollapseIcon /> : <ExpandIcon />}
					</BodyShort>
				</div>
				<Collapse isOpened={apen}>{this.props.children}</Collapse>
			</>
		);
	}
}
