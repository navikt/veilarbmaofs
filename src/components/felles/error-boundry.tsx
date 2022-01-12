import React from 'react';
import { Alert } from '@navikt/ds-react';

interface ErrorBoundryProps {
	message: string;
	children?: any;
}

interface ErrorBoundryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundryProps, ErrorBoundryState> {
	constructor(props: ErrorBoundryProps) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: any, info: any) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <Alert variant="warning">{this.props.message}</Alert>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
