import AlertStripeAdvarselSolid from "nav-frontend-alertstriper/lib/advarsel-solid-alertstripe";
import * as React from 'react';
import {Datasource} from "../../config";
import {Data} from "../../fetch-utils";

interface IProps<T> {
    data: Datasource<T>;
    children: (data: T) => React.ReactNode;
}

interface IState<T> {
    error: boolean;
    data: T | null;
}

class Datafetcher<T> extends React.Component<IProps<T>, IState<T>> {
    public state: IState<T> = { data: null, error: false };
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
                    this.setState({ error: true })
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
            return "Spinner here";
        }
        return this.props.children(this.state.data);
    }
}

export default Datafetcher;