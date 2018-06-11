import * as React from 'react';
import {Datasource} from "../../config";

export type Feilmelding = string & { __TYPE__: "feilmelding" };

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

    public componentDidMount() {
        this.props.data()
            .then((data: T) => {
                this.setState({ data });
            })
            .catch((error: Error) => this.setState({ error: true }));
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ error: true });
    }


    public render() {
        if (this.state.error) {
            return <p>Alvorlig feil... </p>
        }
        if (this.state.data === null) {
            return "Spinner here";
        }
        return this.props.children(this.state.data);
    }
}


export default Datafetcher;