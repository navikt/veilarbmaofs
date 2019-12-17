import React from 'react';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';

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
			return <AlertStripeAdvarsel>{this.props.message}</AlertStripeAdvarsel>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
