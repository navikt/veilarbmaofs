import AlertStripeAdvarselSolid from 'nav-frontend-alertstriper/lib/advarsel-solid-alertstripe';
import NavFrontendSpinner from 'nav-frontend-spinner';
import React from 'react';
import { Datasource } from '../utils/config';
import { Data } from '../utils/fetch-utils';

interface Props<T> {
    data: Datasource<T>;
    children: (data: T) => React.ReactNode;
    loader?: React.ComponentType;
}

interface State<T> {
    error: boolean;
    data: T | null;
}

class Datafetcher<T> extends React.Component<Props<T>, State<T>> {
    public state: State<T> = { data: null, error: false };
    private amIStillhere: boolean = true;

    public componentDidMount() {
        this.props.data()
            .then((data: Data<T>) => {
                if (this.amIStillhere) {
                    const error = Object.keys(data)
                        .map((entry) => data[entry])
                        .some((entry) => entry instanceof Error);

                    if (error) {
                        this.setState({ error });
                    } else {
                        this.setState({ data });
                    }

                }
            })
            .catch((error: Error) => {
                if (this.amIStillhere) {
                    this.setState({ error: true });
                }
            });
    }

    public componentWillUnmount() {
        this.amIStillhere = false;
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ error: true });
    }

    public render() {
        if (this.state.error) {
            return (
            <AlertStripeAdvarselSolid>
                Kunne ikke laste data, prøv på nytt ...
            </AlertStripeAdvarselSolid>);
        }
        if (this.state.data === null) {
            if (this.props.loader) {
                return React.createElement(this.props.loader);
            }
            return <NavFrontendSpinner type="XL"/>;
        }
        return this.props.children(this.state.data);
    }
}

export default Datafetcher;
